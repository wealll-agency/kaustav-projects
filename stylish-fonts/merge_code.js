const fs = require("fs");
const path = require("path");

// 1. Read the custom.js file to extract existing data
const customJsPath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";
const customJsContent = fs.readFileSync(customJsPath, "utf8");

// Regex to extract the categoryData array content
// It starts with 'const categoryData = [' and ends with '];'
// We'll try to capture the array content.
// Since the file has other code, we need to be careful.
const startMarker = "const categoryData = [";
const endMarker = "];"; // This might be too generic, but let's try finding the first occurrence after start
const startIndex = customJsContent.indexOf(startMarker);
if (startIndex === -1) {
  console.error("Could not find categoryData start");
  process.exit(1);
}

// Ensure we find the matching closing bracket for the array
let depth = 0;
let arrayContent = "";
let foundEnd = false;
for (
  let i = startIndex + startMarker.length - 1;
  i < customJsContent.length;
  i++
) {
  const char = customJsContent[i];
  if (char === "[") depth++;
  if (char === "]") depth--;

  if (depth === 0 && i > startIndex) {
    // Found the closing ]
    arrayContent = customJsContent.substring(startIndex, i + 1);
    foundEnd = true;
    break;
  }
}

if (!foundEnd) {
  console.error("Could not find categoryData end");
  process.exit(1);
}

// Evaluate the extracted array to get JS objects
// detailed maps are needed for evaluation to work if referenced?
// Actually categoryData probably doesn't reference variables, just strings/objects.
// But wait, line 68 in the view says: `{ t: "m", map: "hearts" }, // Requires 'hearts' map or pattern`
// This is fine, it's a string.
// We can use eval.
let existingData;
try {
  existingData = eval(arrayContent);
} catch (e) {
  console.error("Error parsing existing data: " + e.message);
  // If strict eval fails, we might need to manually clean it or just trust our manual list for everything?
  // No, we want to preserve the other categories.
  // Let's create a mockup env if needed.
  process.exit(1);
}

// 2. Read the new extracted data
const newDataPath = path.join(__dirname, "fonts", "extracted_fonts.json");
const newData = JSON.parse(fs.readFileSync(newDataPath, "utf8"));

// 3. Helper to generate style objects
// Mapping of "TEXT" appearances to internal map names
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
  if (!s) return "";
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      return {
        pat: styleStr.replace(key, "[TEXT]"),
        map: map,
      };
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
    // Use t: "d" for pattern-based, but our new convert function will handle maps too
    return `      { t: "d", pat: "${esc(pat)}"${mapProp} }`;
  });
}

// 4. Merge Data
const finalCategories = [];
const seenIds = new Set();

// We want to preserve order but prioritize our new data for specific IDs.
// And we want to handle the duplicates key issue by taking the LAST occurrence in the file (assumed to be better).
// So let's process existingData in reverse to find the "latest" definition, or just process forward and overwrite map.

const categoryMap = new Map();
existingData.forEach((cat) => {
  categoryMap.set(cat.id, cat); // Using Map preserves insertion order? No, overwrites.
  // If we want to preserve the ORDER of the first appearance but DATA of the last?
  // Usually section order matters for UI.
  // Let's assume the file had: [CatA (V1), CatB, CatA (V2)].
  // We probably want CatA to be where it was, but use V2 data.
  // OR just use V2 position.
  // Given the file structure (appended duplicates), likely the user wants the full set.
  // I will iterate sequentially. If ID exists, I update the data but keep the position?
  // actually, let's just make a UNIQUE list based on IDs.
});

// Re-construct array from Map values? No, Map iterates in insertion order of Keys.
// So if I set 'popular' then 'love' then 'popular' again, the key 'popular' stays in first position but value updates.
// That is perfect.

// Update our specific targets
const updateCategory = (id, name, icon, extractedList) => {
  const styles = convertListToStyles(extractedList);
  // Create a pseudo-object string generator? No, we need to construct the JS string.

  // We store the CONFIG needed to generate the string
  const existing = categoryMap.get(id);
  const useIcon = existing ? existing.icon : icon;
  const useName = existing ? existing.name : name;

  categoryMap.set(id, {
    id: id,
    name: useName,
    icon: useIcon,
    isGenerated: true,
    styleStrings: styles,
  });
};

updateCategory("popular", "Popular", "ri-vip-crown-line", newData.Popular);
updateCategory("love", "Love", "ri-heart-line", newData.Love);
updateCategory("magic", "Magic", "ri-magic-line", newData.Magic);

// 5. Output
console.log("const categoryData = [");
for (const [id, cat] of categoryMap) {
  console.log(`    {`);
  console.log(`      id: "${cat.id}",`);
  console.log(`      name: "${cat.name}",`);
  console.log(`      icon: "${cat.icon}",`);
  console.log(`      styles: [`);

  if (cat.isGenerated) {
    console.log(cat.styleStrings.join(",\n"));
  } else {
    // Reuse existing styles
    // We need to verify if they are raw objects or strings?
    // In existingData (eval result), they are Objects.
    // We need to serialize them back to JS string format.
    const serialized = cat.styles
      .map((s) => {
        // s has t, pat, map...
        let parts = [`t: "${s.t}"`];
        if (s.map) parts.push(`map: "${s.map}"`);
        if (s.pat) parts.push(`pat: "${esc(s.pat)}"`);
        return `        { ${parts.join(", ")} }`;
      })
      .join(",\n");
    console.log(serialized);
  }

  console.log(`      ],`);
  console.log(`    },`);
}
console.log("];");
