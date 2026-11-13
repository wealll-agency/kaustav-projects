const fs = require("fs");
const path = require("path");

const fontPath = path.join(__dirname, "fonts", "stylish_sad_fonts.json");
const customJsPath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const fonts = JSON.parse(fs.readFileSync(fontPath, "utf8"));

// Common mapping logic
const textVariations = {
  "𝑻𝑬𝑿𝑻": "bold_italic",
  TEXT: null, // default
  ᴛᴇxᴛ: "small_caps",
  TᴇXT: null, // manual
  "T𝔢XT": null,
  ＴＥXＴ: "full_width", // partial?
  "ｔ𝖊Xｔ": null,
  丅ΞX丅: null,
  TｅXT: null,
  "ⓉΣXⓉ": null,
  "T𝐞XT": "bold_serif", // maybe checks part?
  TєXT: null,
  "𝔗𝔈𝔛𝔗": "fraktur",
  "ⓉⒺⓍⓉ": "circled", // though using pattern if we can
  "🆃🅴🆇🆃": "boxed_black",
  "TE᙭T": "canadian",
  "𝚃𝙴𝚇𝚃": "monospace",
  "𝓣𝓔𝓧𝓣": "bold_script",
  ＴＥＸＴ: "full_width",
  "🅃🄴🅇🅃": "boxed",
  "𝑻𝑬𝑿𝑻": "bold_italic",
  "𝕋𝔼𝕏𝕋": "double_struck",
  "ᖶᘿ᙭ᖶ": "canadian", // usually
  "𝕿𝕰𝖃𝕿": "fraktur_bold", // or similar
  "𝙏𝙀𝙓𝙏": "sans_italic_bold", // bold_sans_italic
};

// Enhance mappings based on visual checks
const maps = {
  bold_serif: "𝐚",
  bold_sans: "𝗮",
  monospace: "𝚊",
  full_width: "ａ",
  double_struck: "𝕒",
  canadian: "ᖘ",
  script: "𝒶",
  bold_script: "𝓪",
  bold_italic: "𝑻",
  sans_italic: "𝘛",
  superscript: "ᵃ",
  small_caps: "ᴛ",
  fraktur: "𝔗",
  boxed_black: "🅰",
  boxed: "🄰",
  circled: "Ⓐ",
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  // 1. Check for known map keys in the string
  // This is tricky because "TEXT" is inside some.
  // Let's look for exact substrings that match our known "TEXT" variants
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      // Replace key with [TEXT]
      return { pat: styleStr.replace(key, "[TEXT]"), map: map };
    }
  }

  // Fallback: regular TEXT
  if (styleStr.includes("TEXT"))
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };

  // Fallback: mixed case "Text" or others? user used "TEXT" input so extraction should have TEXT.
  // Some fonts might transform it completely e.g. symbols.
  // If no TEXT found, append [TEXT] (safe fallback)
  return { pat: styleStr + " [TEXT]", map: null };
}

function processFonts(fontList) {
  return fontList.map((s) => {
    const { pat, map } = analyzeStyle(s);
    // Clean up common issues
    // e.g. T❅E❅X❅T -> replacement might be complex.
    // If the extraction has "T❅E❅X❅T", and we replace "TEXT", it won't work.
    // We need to support interspersed?
    // For now, simple replacement.
    return { t: "d", pat: pat, map: map };
  });
}

const stylishStyles = processFonts(fonts.stylish);
const sadStyles = processFonts(fonts.sad);

// Read custom.js
const content = fs.readFileSync(customJsPath, "utf8");

// Parse categoryData block
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
const jsonStr = block.substring(
  block.indexOf("["),
  block.lastIndexOf("];") + 1,
);
let categoryData;
try {
  categoryData = eval(jsonStr);
} catch (e) {
  console.error("Eval error", e);
  process.exit(1);
}

// Update Helper
function updateOrAddCategory(id, name, icon, newStyles, positionIndex) {
  // Check if exists
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
    // Insert at position or end
    if (positionIndex !== undefined && positionIndex < categoryData.length) {
      categoryData.splice(positionIndex, 0, newCat);
    } else {
      categoryData.push(newCat);
    }
  }
}

// Logic:
// Free Fire is usually index 2 (after Love).
// Stylish is usually after Free Fire?
// Reference order: Popular, Love, Free Fire, Stylish, Sad.
// Existing array likely: Popular, Love, Free Fire, ...

// We update 'stylish'
updateOrAddCategory("stylish", "Stylish", "ri-t-shirt-line", stylishStyles, 3);

// We update 'sad'
updateOrAddCategory("sad", "Sad", "ri-emotion-sad-line", sadStyles, 4);

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
