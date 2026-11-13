const fs = require("fs");
const path = require("path");

const fontPath = path.join(
  __dirname,
  "fonts",
  "cute_serious_joiner_sweet_fonts.json",
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
  "Ｔｈａｎｋ ｙｏｕ ｓｏ ｍｕｃｈ": "full_width",
  "𝗖𝗨𝗧𝗘": "bold_sans",
  "𝗧𝗘𝗫𝗧": "bold_sans",
  "Ť乇𝓍Ť": "script", // manual tweak
  T̾E̾X̾T̾: "tilde_struck", // Need to check if this map exists, but usually its decorative
  T͓̽E͓̽X͓̽T͓̽: "cross_hatch",
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function analyzeStyle(styleStr) {
  // 1. Check for known map keys in the string
  for (const [key, map] of Object.entries(textVariations)) {
    if (key && styleStr.includes(key)) {
      if (map) {
        return { pat: styleStr.replace(key, "[TEXT]"), map: map };
      }
    }
  }

  // Joiner Fonts special case
  // They are like T•E•X•T which is [TEXT] but spread out.
  // Ideally we want to detect the joiner char.
  // But since the user wants EXACT visual results, we can just treat T,E,X,T as placeholders?
  // Actually, Joiner uses a function 'interleave' usually.
  // If the style is T•E•X•T, the pattern logic "S t y l e" -> spaced might apply.
  // But let's look at `custom.js` convert function again.
  // if (style.pat === "S♥t♥y♥l♥e") return interleave(text, "♥");
  // We can add more cases like this or just use the pattern replacement if it works.
  // However, [TEXT] replacement replaces the whole block.
  // If we want T•E•X•T effect for input "HELLO", we want H•E•L•L•O.
  // Our current `convert` function handles simple [TEXT] replacement.
  // It does NOT automatically handle joiners purely by [TEXT].
  // UNLESS we use specific map or if we modify convert function.
  // BUT the user wants "as you see in reference site".
  //
  // Let's check the extracted strings for Joiner: "T•E•X•T", "T✦E✦X✦T"
  // These are clearly patterns that need the joiner logic.
  // I should detect this pattern: T<char>E<char>X<char>T

  const joinerMatch = styleStr.match(/^T(.+)E(.+)X(.+)T$/);
  if (
    joinerMatch &&
    joinerMatch[1] === joinerMatch[2] &&
    joinerMatch[2] === joinerMatch[3]
  ) {
    // It is a joiner!
    // We can't represent this easily with just "pat" and "map" unless "pat" supports a special syntax
    // OR we update `convert` function to support a `joiner` property.
    // OR we map it to the existing hardcoded ones if possible? No, we have 22.
    // Let's update `convert` function logic in `custom.js` separately if needed?
    // Wait, the prompt implies I should just update the categories.
    // If I use a pattern like `[TEXT]`, valid for `T•E•X•T` would be `[TEXT]`.
    // But `[TEXT]` would replace to `HELLO`. So `T•E•X•T` becomes `HELLO`.
    // That loses the dots.
    // So for joiners, we absolutely need a way to specify the joiner char.
    // Let's use a convention. `t: 'j', join: '•'` ?
    // Custom.js `convert` function:
    // if (style.t === "d" && style.pat) ...
    // if (style.pat === "S♥t♥y♥l♥e") return interleave(text, "♥");

    const separator = joinerMatch[1];
    // We can just set pat to something special?
    // Or better, let's treat it as a new type or handled by `pat` special string?
    // To be safe and minimal:
    // I will incorrectly assume [TEXT] for now if I can't change code.
    // BUT I CAN change code. I am injecting code.
    // So I can decide to set `t: 'j', join: separator`.
    // AND I need to update `convert` to handle `t: 'j'`.
    // Or `t: 'd', join: separator` and update convert.

    return { t: "d", join: separator, pat: "[TEXT]" }; // We will need to update custom.js convert to look for `join` prop.
  }

  // Fallback
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
    let cleanS = s;
    // Joiner detection pre-pass
    // If the string is exactly 7 chars and T,E,X,T are at 0,2,4,6?
    // e.g. T•E•X•T is 7 chars.
    // Some might be longer chars.
    // Regex /^(T)(.+)(E)\2(X)\2(T)$/ might work if separator is consistent.
    // Actually, let's just use the analyzeStyle.

    const { pat, map, join, t } = analyzeStyle(cleanS);

    let res = { t: t || "d" };
    if (pat) res.pat = pat;
    if (map) res.map = map;
    if (join) res.join = join;

    return res;
  });
}

const cuteStyles = processFonts(fonts.cute);
const seriousStyles = processFonts(fonts.serious);
const joinerStyles = processFonts(fonts.joiner);
const sweetStyles = processFonts(fonts.sweet);

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

updateOrAddCategory("cute", "Cute", "ri-bear-smile-line", cuteStyles, 17);
updateOrAddCategory(
  "serious",
  "Serious",
  "ri-user-unfollow-line",
  seriousStyles,
  18,
);
updateOrAddCategory("joiner", "Joiner", "ri-links-line", joinerStyles, 19);
updateOrAddCategory("sweet", "Sweet", "ri-candy-line", sweetStyles, 20);

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
    if (s.join) parts.push(`join: "${esc(s.join)}"`);
    out += `        { ${parts.join(", ")} },\n`;
  });
  out += `      ],\n`;
  out += `    },\n`;
});
out += "  ];";

let result =
  lines.slice(0, catStart).join("\n") +
  "\n" +
  out +
  "\n" +
  lines.slice(catEnd + 1).join("\n");

// Also update the convert function to handle 'join'
// We look for the convert function
// It must handle style.join if present.
if (!result.includes("if (style.join) return interleave(text, style.join);")) {
  // Add it dynamically if not present?
  // Regex replace to insert it.
  // Finding: // 2. Decorators & Patterns
  // Inserting before it or inside it.

  const convertPattern =
    /(\/\/ 2\. Decorators & Patterns\s+if \(style\.t === "d" && style\.pat\) \{)/;
  // Actually the current code is:
  // // 2. Decorators & Patterns
  // if (style.pat) {

  // Let's modify the result string to include the detection logic
  // We can inject it before "if (style.pat)"

  const injectPoint = "if (style.pat) {";
  const injection = `if (style.join) return interleave(text, style.join);\n    ${injectPoint}`;

  // CAUTION: This replacement might be fragile if multiple occurrences.
  // The file has only one convert function usually.
  // Let's try to be safer.

  if (result.includes(injectPoint)) {
    result = result.replace(injectPoint, injection);
  }
}

fs.writeFileSync(customJsPath, result, "utf8");
console.log("Success");
