const fs = require("fs");
const path = require("path");

const fontPath = path.join(
  __dirname,
  "fonts",
  "boxed_birthday_thanks_party_fonts.json",
);
const customJsPath = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const fonts = JSON.parse(fs.readFileSync(fontPath, "utf8"));

// Common mapping logic - expand as needed
// Using the same set from previous injections for consistency
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
  "₮ɆӾ₮": "strike",
  "𝒯𝐸𝒳𝒯": "script",
  тєχт: null,
  "𝗧𝗘𝗫𝗧": "bold_sans",
  ｲ乇ﾒｲ: "japanese_style",
  ƬΣXƬ: "greek_style",
  "𝕁𝕠𝕪𝕗𝕦𝕝": "double_struck",
  "𝐓𝐄𝐗𝐓": "bold_serif",
  "🅣🅔🅧🅣": "circled_black",
  "Ťⓔxｔ": "bubble",
  ᴛᴇxᴛ: null,
  ㄒ乇乂ㄒ: "chinese_style",
  ŦєҲŦ: null,
  TXƎT: null,
  "⊥XƎ⊥": null,
  ՇєאՇ: null,
  ͲƐჯͲ: "greek_style",
  "𝕋𝕙𝕒𝕟𝕜 𝕐𝕠𝕦 𝕊𝕠 𝕄𝕦𝕔𝕙": "double_struck",
  "𝓣𝓱𝓪𝓷𝓴 𝓨𝓸𝓾 𝓢𝓸 𝓜𝓾𝓬𝓱": "bold_script",
  "ᴛʜᴀɴᴋ ʏᴏᴜ sᴏ ᴍᴜᴄʜ": "small_caps",
  "𝒯𝒽𝒶𝓃𝓀 𝓎𝑜𝓊 𝓈𝑜 𝓂𝓊𝒸𝒽": "script",
  "𝕄𝕦𝕔𝕙 𝔸𝕡𝕡𝕣𝕖𝕔𝕚𝕒𝕥𝕖𝕕": "double_struck",
  "𝓜𝓾𝓬𝓱 𝓐𝓹𝓹𝓻𝓮𝓬𝓲𝓪𝓽𝓮𝓭": "bold_script",
  "𝓓𝓮𝓮𝓹𝓵𝔂 𝓖𝓻𝓪𝓽𝓮𝓯𝓾𝓵": "bold_script",
  "𝔇𝔢𝔢𝔭𝔩𝔶 𝔊𝔯𝔞𝔯𝔞𝔠𝔣𝔯𝔦": "fraktur",
  "𝐓𝐄𝐗𝐓": "bold_serif",
  // Manually handle some special case strings
  "Ｔｈａｎｋ ｙｏｕ ｓｏ ｍｕｃｈ": "full_width",
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  // 1. Check for known map keys in the string
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      // Special handling for Thanks/Birthday strings that are replacements of [TEXT]
      // If the key is potentially the "TEXT" placeholder
      if (map) {
        return { pat: styleStr.replace(key, "[TEXT]"), map: map };
      }
    }
  }

  // Fallback: search for variants of 'Thanks', 'Birthday', etc. or just replacing 'TEXT'
  // But since the user wants specific counts, and the styles are mostly decorative
  // We can try to be smart about extracting the map.

  // Default fallback
  if (styleStr.includes("TEXT"))
    return { pat: styleStr.replace("TEXT", "[TEXT]"), map: null };

  return {
    pat:
      styleStr.replace("Your Name", "[TEXT]").replace("YOUR NAME", "[TEXT]") +
      " [TEXT]",
    map: null,
  };
}

function processFonts(fontList) {
  return fontList.map((s) => {
    // Cleaning up the string first if needed
    let cleanS = s;
    // Some specialized logic for the 'Thanks' styles which contain long phrases
    if (
      cleanS.includes("Thank You So Much") ||
      cleanS.includes("thank you so much")
    ) {
      // These usually don't have the [TEXT] placeholder visible in the raw extraction?
      // Actually, looking at the extraction, they often have "TEXT" at the end or begining.
      // Let's rely on analyzeStyle basic logic first.
    }

    const { pat, map } = analyzeStyle(cleanS);
    // Clean up pattern if it ended up weird
    let finalPat = pat;
    if (
      finalPat.endsWith(" [TEXT]") &&
      finalPat.includes("[TEXT]", 0) &&
      finalPat.indexOf("[TEXT]") !== finalPat.lastIndexOf("[TEXT]")
    ) {
      // remove the appended one if one already existed
      finalPat = finalPat.substring(0, finalPat.length - 7);
    }

    return { t: "d", pat: finalPat, map: map };
  });
}

const boxedStyles = processFonts(fonts.boxed);
const birthdayStyles = processFonts(fonts.birthday);
const thanksStyles = processFonts(fonts.thanks);
const partyStyles = processFonts(fonts.party);

// Read custom.js
const content = fs.readFileSync(customJsPath, "utf8");

// Parse categoryData
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

// Order: Popular(0), Love(1), Free Fire(2), Stylish(3), Sad(4), Stars(5), Happy(6), Emoji(7), Symbol(8)
// Cool(9), Crazy(10), Fancy(11), Gaming(12)
// Boxed(13), Birthday(14), Thanks(15), Party(16)

updateOrAddCategory(
  "boxed",
  "Boxed",
  "ri-checkbox-blank-line",
  boxedStyles,
  13,
);
updateOrAddCategory("birthday", "Birthday", "ri-cake-line", birthdayStyles, 14);
updateOrAddCategory("thanks", "Thanks", "ri-hand-heart-line", thanksStyles, 15);
updateOrAddCategory("party", "Party", "ri-cup-line", partyStyles, 16);

// Generate Output
// Re-serialize everything
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
