const fs = require("fs");
const path = require("path");

// Reads local font data + custom.js, then injects or updates categories.
const fontPath = path.join(__dirname, "fonts", "stars_happy_fonts.json");
const customJsPath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const fonts = JSON.parse(fs.readFileSync(fontPath, "utf8"));

// Common mapping logic - expand as needed
const textVariations = {
  "𝑻𝑬𝑿𝑻": "bold_italic",
  TEXT: null,
  ᴛᴇxᴛ: "small_caps",
  TᴇXT: null,
  "T𝔢XT": null,
  ＴＥXＴ: "full_width",
  "ｔ𝖊Xｔ": null,
  丅ΞX丅: null,
  TｅXT: null,
  "ⓉΣXⓉ": null,
  "T𝐞XT": "bold_serif",
  TєXT: null,
  "𝔗𝔈𝔛𝔗": "fraktur",
  "ⓉⒺⓍⓉ": "circled",
  "🆃🅴🆇🆃": "boxed_black",
  "TE᙭T": "canadian",
  "𝚃𝙴𝚇𝚃": "monospace",
  "𝓣𝓔𝓧𝓣": "bold_script",
  ＴＥＸＴ: "full_width",
  "🅃🄴🅇🅃": "boxed",
  "𝑻𝑬𝑿𝑻": "bold_italic",
  "𝕋𝔼𝕏𝕋": "double_struck",
  "ᖶᘿ᙭ᖶ": "canadian",
  "𝕿𝕰𝖃𝕿": "fraktur_bold",
  "𝙏𝙀𝙓𝙏": "sans_italic_bold",
  "₮ɆӾ₮": "strike", // sometimes
  "𝒯𝐸𝒳𝒯": "script",
  тєχт: null,
  "𝗧𝗘𝗫𝗧": "bold_sans",
  ｲ乇ﾒｲ: "japanese_style", // or just map it if we had one
  ƬΣXƬ: "greek_style",
  "𝕁𝕠𝕪𝕗𝕦𝕝": "double_struck", // example
  "𝐓𝐄𝐗𝐓": "bold_serif",
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  // 1. Check for known map keys in the string
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      return { pat: styleStr.replace(key, "[TEXT]"), map: map };
    }
  }

  // Fallback: regular TEXT
  if (styleStr.includes("TEXT"))
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };

  return { pat: styleStr + " [TEXT]", map: null };
}

function processFonts(fontList) {
  return fontList.map((s) => {
    const { pat, map } = analyzeStyle(s);
    return { t: "d", pat: pat, map: map };
  });
}

const starsStyles = processFonts(fonts.stars);
const happyStyles = processFonts(fonts.happy);

// Read custom.js
const content = fs.readFileSync(customJsPath, "utf8");

// Parse categoryData using simple block extraction
// (Assuming standard formatting as seen in previous views)
const lines = content.split(/\r?\n/);
let catStart = -1,
  catEnd = -1;
let bracket = 0;
let inside = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes("const categoryData = [")) {
    catStart = i;
    inside = true;
  }
  if (inside) {
    for (const c of line) {
      if (c === "[") bracket++;
      if (c === "]") bracket--;
    }
    if (bracket === 0 && line.includes("];")) {
      catEnd = i;
      break;
    }
  }
}

if (catStart === -1 || catEnd === -1) {
  console.error("Block not found");
  process.exit(1);
}

const block = lines.slice(catStart, catEnd + 1).join("\n");
// We need to validly parse this JSON-like object.
// Since it's assignment to var, we extract the array part.
const jsonStr = block.substring(
  block.indexOf("["),
  block.lastIndexOf("];") + 1,
);

let categoryData;
try {
  // Eval is risky but for this specific automated task on known file structure it works best
  // to preserve existing data structure without full AST parsing.
  categoryData = eval(jsonStr);
} catch (e) {
  console.error("Eval error", e);
  process.exit(1);
}

function updateOrAddCategory(id, name, icon, newStyles, positionIndex) {
  const idx = categoryData.findIndex((c) => c.id === id);
  const newCat = {
    id: id,
    name: name,
    icon: icon,
    styles: newStyles,
  };

  if (idx !== -1) {
    categoryData[idx] = newCat;
  } else {
    if (positionIndex !== undefined && positionIndex < categoryData.length) {
      categoryData.splice(positionIndex, 0, newCat);
    } else {
      categoryData.push(newCat);
    }
  }
}

// Order: Popular(0), Love(1), Free Fire(2), Stylish(3), Sad(4), Stars(5), Happy(6)
// We update 'star' -> 'Stars'
updateOrAddCategory("star", "Stars", "ri-star-line", starsStyles, 5);

// We update 'happy' -> 'Happy'
updateOrAddCategory("happy", "Happy", "ri-emotion-happy-line", happyStyles, 6);

// Generate Output
let out = "const categoryData = [\n";
categoryData.forEach((cat) => {
  out += `    {\n`;
  out += `      id: "${cat.id}",\n`;
  out += `      name: "${cat.name}",\n`;
  out += `      icon: "${cat.icon}",\n`;
  out += `      styles: [\n`;
  cat.styles.forEach((s) => {
    let parts = [`t: "${s.t}"`];
    if (s.map) parts.push(`map: "${s.map}"`);
    if (s.pat) parts.push(`pat: "${esc(s.pat)}"`);
    out += `        { ${parts.join(", ")} },\n`;
  });
  out += `      ],\n`;
  out += `    },\n`;
});
out += "  ];";

const result =
  lines.slice(0, catStart).join("\n") +
  "\n" +
  out +
  "\n" +
  lines.slice(catEnd + 1).join("\n");
fs.writeFileSync(customJsPath, result, "utf8");
console.log("Success");
