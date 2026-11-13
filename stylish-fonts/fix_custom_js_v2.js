const fs = require("fs");
const path = require("path");

const filePath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";
const extractedPath = path.join(__dirname, "fonts", "extracted_fonts.json");
const outputFile = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const fileContent = fs.readFileSync(filePath, "utf8");
const lines = fileContent.split(/\r?\n/);
const extractedData = JSON.parse(fs.readFileSync(extractedPath, "utf8"));

// 1. Locate categoryData block
let startLine = -1;
let endLine = -1;
let bracketCount = 0;
let insideBlock = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!insideBlock && line.includes("const categoryData = [")) {
    startLine = i;
    insideBlock = true;
  }

  if (insideBlock) {
    // Simple bracket counting (ignoring comments/strings for now assumed safe sufficient for this specific file)
    for (const char of line) {
      if (char === "[") bracketCount++;
      if (char === "]") bracketCount--;
    }

    if (bracketCount === 0 && startLine !== -1) {
      // Check if this line actually closes the block (contains '];')
      if (line.includes("];")) {
        endLine = i;
        break;
      }
    }
  }
}

if (startLine === -1 || endLine === -1) {
  console.error("Could not find categoryData block");
  process.exit(1);
}

// 2. Extract and Parse
const blockLines = lines.slice(startLine, endLine + 1);
const blockString = blockLines.join("\n");
// Remove "const categoryData = " and trailing ";" to get valid expression
const jsonString = blockString.substring(
  blockString.indexOf("["),
  blockString.lastIndexOf("];") + 1,
);

let existingData;
try {
  existingData = eval(jsonString);
} catch (e) {
  console.error("Eval failed: " + e.message);
  // fallback: just use what we have? No, we need duplicates handling.
  process.exit(1);
}

// 3. Deduplicate
const categoryMap = new Map();
existingData.forEach((cat) => {
  categoryMap.set(cat.id, cat); // Use latest definition
});

// 4. Update with extracted data
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
  // Fallbacks
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

// 5. Generate Code
let newBlock = "const categoryData = [\n";
for (const [id, cat] of categoryMap) {
  newBlock += `    {\n`;
  newBlock += `      id: "${cat.id}",\n`;
  newBlock += `      name: "${cat.name}",\n`;
  newBlock += `      icon: "${cat.icon}",\n`;
  newBlock += `      styles: [\n`;

  if (cat.isGenerated) {
    newBlock += cat.styleStrings.join(",\n") + "\n";
  } else {
    newBlock +=
      cat.styles
        .map((s) => {
          let parts = [`t: "${s.t}"`];
          if (s.map) parts.push(`map: "${s.map}"`);
          if (s.pat) parts.push(`pat: "${esc(s.pat)}"`);
          return `        { ${parts.join(", ")} }`;
        })
        .join(",\n") + "\n";
  }
  newBlock += `      ],\n`;
  newBlock += `    },\n`;
}
newBlock += "  ];";

// 6. Replace content in original file structure
const prefix = lines.slice(0, startLine).join("\n") + "\n";
const suffix = "\n" + lines.slice(endLine + 1).join("\n");
const finalContent = prefix + newBlock + suffix;

fs.writeFileSync(outputFile, finalContent, "utf8");
console.log("Success");
