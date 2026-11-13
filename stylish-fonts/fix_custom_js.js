const fs = require("fs");
const path = require("path");
const filePath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";
const extractedPath = path.join(__dirname, "fonts", "extracted_fonts.json");

const fileContent = fs.readFileSync(filePath, "utf8");
const extractedData = JSON.parse(fs.readFileSync(extractedPath, "utf8"));

// 1. Extract the Block
// We know it starts at "const categoryData = [" and ends at "];" around line 694.
// But there might be other "];".
// We look for the "];" before "// Comprehensive Maps".
const startMarker = "const categoryData = [";
const endMarker = "  // Comprehensive Maps"; // Line 696
const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found");
  process.exit(1);
}

// The array content ends at the last "];" before endIndex
const block = fileContent.substring(startIndex, endIndex);
const arrayEndIndex = block.lastIndexOf("];");
const arrayContent = block.substring(startMarker.length, arrayEndIndex + 1); // include ];

// Now we have `[ ... ];` (wait, I included ]; in arrayContent?)
// Let's just get the content inside brackets [ ... ]
// Actually, `arrayContent` starts after `const categoryData = [`.
// So it is `    { ... }, ... ];`
// We need to construct a valid JS expression `[` + arrayContent;

const evalString =
  "[" + arrayContent.substring(0, arrayContent.lastIndexOf(";"));

// 2. Parse existing data
let existingData;
try {
  existingData = eval(evalString);
} catch (e) {
  console.error("Eval failed: " + e.message);
  process.exit(1);
}

// 3. Deduplicate and Merge
// Keep valid categories. Use Map to deduplicate by ID.
const categoryMap = new Map();
existingData.forEach((cat) => {
  categoryMap.set(cat.id, cat);
});

// 4. Overwrite with New Data
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
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      return { pat: styleStr.replace(key, "[TEXT]"), map: map };
    }
  }
  if (styleStr.includes("TEXT"))
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };
  if (styleStr.includes("text"))
    return { pat: styleStr.replace("text", "[TEXT]"), map: null };
  return { pat: styleStr + " [TEXT]", map: null };
}

function convertListToStyles(list) {
  return list.map((s) => {
    const { pat, map } = analyzeStyle(s);
    const mapProp = map ? `, map: "${map}"` : "";
    return `      { t: "d", pat: "${esc(pat)}"${mapProp} }`;
  });
}

function updateCategory(id, name, icon, extractedList) {
  const styles = convertListToStyles(extractedList);
  const existing = categoryMap.get(id);
  categoryMap.set(id, {
    id: id,
    name: existing ? existing.name : name,
    icon: existing ? existing.icon : icon,
    isGenerated: true,
    styleStrings: styles,
  });
}

updateCategory(
  "popular",
  "Popular",
  "ri-vip-crown-line",
  extractedData.Popular,
);
updateCategory("love", "Love", "ri-heart-line", extractedData.Love);
updateCategory("magic", "Magic", "ri-magic-line", extractedData.Magic);

// 5. Generate Output Code
let params = "  const categoryData = [\n";
for (const [id, cat] of categoryMap) {
  params += `    {\n`;
  params += `      id: "${cat.id}",\n`;
  params += `      name: "${cat.name}",\n`;
  params += `      icon: "${cat.icon}",\n`;
  params += `      styles: [\n`;
  if (cat.isGenerated) {
    params += cat.styleStrings.join(",\n") + "\n";
  } else {
    params +=
      cat.styles
        .map((s) => {
          let parts = [`t: "${s.t}"`];
          if (s.map) parts.push(`map: "${s.map}"`);
          if (s.pat) parts.push(`pat: "${esc(s.pat)}"`);
          return `        { ${parts.join(", ")} }`;
        })
        .join(",\n") + "\n";
  }
  params += `      ],\n`;
  params += `    },\n`;
}
params += "  ];";

// 6. Replace and Save
// We replace the block we found.
const newContent =
  fileContent.substring(0, startIndex) +
  params +
  fileContent.substring(startIndex + block.lastIndexOf("];") + 2);
fs.writeFileSync(
  "d:/Kaustav/Projects/stylish-fonts/js/custom-fixed.js",
  newContent,
  "utf8",
);
console.log(
  "File generated at d:/Kaustav/Projects/stylish-fonts/js/custom-fixed.js",
);
