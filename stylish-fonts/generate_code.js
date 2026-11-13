const fs = require("fs");
const path = require("path");
const data = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "fonts", "extracted_fonts.json"),
    "utf8",
  ),
);

// Mapping of "TEXT" appearances to internal map names in custom.js
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

// Helper function to escape strings for JavaScript code usage
function esc(s) {
  if (!s) return "";
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/'/g, "\\'");
}

function analyzeStyle(styleStr) {
  // 1. Try to match specific Fancy Text patterns
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      return {
        pat: styleStr.replace(key, "[TEXT]"),
        map: map,
      };
    }
  }

  // 2. Fallbacks for standard "TEXT" casing
  if (styleStr.includes("TEXT")) {
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };
  }
  if (styleStr.includes("text")) {
    return { pat: styleStr.replace("text", "[TEXT]"), map: null };
  }

  // 3. Fallback: if we can't find the keyword, append it
  return { pat: styleStr + " [TEXT]", map: null };
}

function generateCategory(id, name, icon, list) {
  const styles = list
    .map((s) => {
      const { pat, map } = analyzeStyle(s);
      if (map) {
        return `        { t: "d", pat: "${esc(pat)}", map: "${map}" }`;
      } else {
        return `        { t: "d", pat: "${esc(pat)}" }`;
      }
    })
    .join(",\n");

  return `    {
      id: "${id}",
      name: "${name}",
      icon: "${icon}",
      styles: [
${styles}
      ]
    }`;
}

const popular = generateCategory(
  "popular",
  "Popular",
  "ri-vip-crown-line",
  data.Popular,
);
const love = generateCategory("love", "Love", "ri-heart-line", data.Love);
const magic = generateCategory("magic", "Magic", "ri-magic-line", data.Magic);

console.log("const categoryData = [");
console.log(popular + ",");
console.log(love + ",");
// Note: We need to append the OTHER categories from the original file manually or generate them here.
// Since we only maintain exact counts for these 3, I will verify if I should keep others.
// The user said "create exactly same number of fonts... in our reference website".
// The user did not strictly say "delete all other categories", but the "Magic" bug implies issues with "Magic".
// I will output these 3 variables to a file so I can splice them in.
console.log(magic);
console.log("]; // END OF GENERATED");
