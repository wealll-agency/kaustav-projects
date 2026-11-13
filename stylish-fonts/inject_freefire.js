const fs = require("fs");
const path = require("path");

const fontPath = path.join(__dirname, "fonts", "freefire_fonts.json");
const customJsPath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const fonts = JSON.parse(fs.readFileSync(fontPath, "utf8"));

// Mappings from analyzing the fonts visually or known codes
// We need to map styles like 𝔗𝔈𝔛𝔗 (fraktur), 𝐓𝐄𝐗𝐓 (bold_serif), etc.
const textVariations = {
  "𝐓𝐄𝐗𝐓": "bold_serif",
  "𝗧𝗘𝗫𝗧": "bold_sans",
  "𝚃𝙴𝚇𝚃": "monospace",
  ＴＥＸＴ: "full_width",
  "𝕋𝔼𝕏𝕋": "double_struck",
  "TE᙭T": "canadian",
  "𝒯𝐸𝒳𝒯": "script",
  "𝓣𝓔𝓧𝓣": "bold_script",
  "𝑻𝑬𝑿𝑻": "bold_italic",
  "𝘛𝘌𝘟𝘛": "sans_italic",
  ᵗᵉˣᵗ: "superscript",
  ᴛᴇxᴛ: "small_caps",
  "𝔗𝔈𝔛𝔗": "fraktur",
  TEXT: null,
  "ⓉΣXⓉ": null, // Custom
  TᴇXT: null,
  TｅXT: null,
  ᴛEXᴛ: null,
  "T𝐞XT": null,
  TᴇXT: null,
  丅ΞX丅: null,
  "🆃🅴🆇🆃": "boxed_black",
  TєXT: null,
  "🅣🅔🅧🅣": "bubble_black", // or custom map if we have it? No we don't have bubble_black in maps yet maybe?
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      // Need to check if it's potentially part of a longer map key? No they are distinct.
      // But 'TEXT' is in 'TEXT' so that's why we put it last or use length check.
      // However, our map has 'TEXT' at end.
      return { pat: styleStr.replace(key, "[TEXT]"), map: map };
    }
  }
  // Deep fallback
  if (styleStr.includes("TEXT"))
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };
  return { pat: styleStr + " [TEXT]", map: null };
}

const styles = fonts
  .map((s) => {
    const { pat, map } = analyzeStyle(s);
    const mapProp = map ? `, map: "${map}"` : "";
    return `      { t: "d", pat: "${esc(pat)}"${mapProp} }`;
  })
  .join(",\n");

// Build the category string
const ffCategory = `    {
      id: "freefire",
      name: "Free Fire",
      icon: "ri-fire-line",
      styles: [
${styles}
      ]
    },`;

// Read file
let content = fs.readFileSync(customJsPath, "utf8");

// We need to insert this category.
// Let's replace the existing 'freefire' if it exists, or add it.
// The file has `const categoryData = [ ... ];`
// We can use a regex to find `{ id: "freefire", ... },`?
// Or we can parse the array logic again.

const startMarker = "const categoryData = [\n";
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) process.exit(1);

// Let's construct a cleaner approach: match the block, extract, manage.
// BUT since we just deduplicated and cleaned up, we know the structure.
// Let's remove any existing freefire block and insert this one after "Love" (second position usually).

// Simpler: Just remove "freefire" if exists and append to array start?
// No, the user wants "steps". Order implies "Love" -> "Free Fire" -> "Stylish" etc.
// Reference site has: Love, Free Fire, Stylish ...
// Our generated file has Popular, Love, Magic.
// We should put Free Fire after Love.

// 1. Check if "freefire" exists and remove it
let newContent = content;
// We'll use a simple regex for the object block: `{ id: "freefire", ...? ]\s*},`
// This is risky with nested braces.
// Let's recurse to parsing approach again, it's safer.

const lines = content.split(/\r?\n/);
let catStart = -1,
  catEnd = -1;
let bracket = 0;
let inCat = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("const categoryData = [")) {
    catStart = i;
    inCat = true;
  }
  if (inCat) {
    for (const c of lines[i]) {
      if (c === "[") bracket++;
      if (c === "]") bracket--;
    }
    if (bracket === 0 && lines[i].includes("];")) {
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
// We need to parse this local block to JS object
let categoryData;
try {
  const jsonStr = block.substring(
    block.indexOf("["),
    block.lastIndexOf("];") + 1,
  );
  categoryData = eval(jsonStr);
} catch (e) {
  console.error("Eval failed: " + e.message);
  process.exit(1);
}

// Filter out existing freefire and insert new one
categoryData = categoryData.filter((c) => c.id !== "freefire");

// Find insertion index: after 'love', or at index 2 (0-indexed)
const loveIndex = categoryData.findIndex((c) => c.id === "love");
const insertIndex = loveIndex !== -1 ? loveIndex + 1 : 1;

const newFFCat = {
  id: "freefire",
  name: "Free Fire",
  icon: "ri-fire-line",
  styles: JSON.parse(JSON.stringify(fonts)).map((s) => {
    const { pat, map } = analyzeStyle(s);
    return { t: "d", pat: pat, map: map }; // simplified obj, we will stringify manually
  }),
};

categoryData.splice(insertIndex, 0, newFFCat);

// Generate string
let out = "const categoryData = [\n";
categoryData.forEach((cat) => {
  out += `    {\n`;
  out += `      id: "${cat.id}",\n`;
  out += `      name: "${cat.name}",\n`;
  out += `      icon: "${cat.icon}",\n`;
  out += `      styles: [\n`;

  // We have to be careful. `newFFCat.styles` are objects. Existing valid cats also have objects.
  // BUT our previous script might have left them as generic objects from eval.
  // We need to re-serialize them.
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
