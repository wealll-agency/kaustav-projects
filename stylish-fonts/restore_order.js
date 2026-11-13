const fs = require("fs");
const path = "d:/Kaustav/Projects/stylish-fonts/js/custom.js";

const originalOrder = [
  "popular",
  "love",
  "freefire",
  "stylish",
  "sad",
  "star",
  "happy",
  "emoji",
  "symbol",
  "cool",
  "crazy",
  "fancy",
  "gaming",
  "boxed",
  "birthday",
  "thanks",
  "party",
  "cute",
  "serious",
  "joiner",
  "sweet",
  "ugly",
  "weird",
  "small",
  "lines",
  "hello",
  "sword",
  "sport",
  "anime",
  "gun",
  "key",
  "gym",
  "bold",
  "italic",
  "magic",
];

try {
  const content = fs.readFileSync(path, "utf8");

  const startMarker = "const categoryData = [";
  const endMarker = "  ];";

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker, startIndex);

  if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find categoryData block");
    process.exit(1);
  }

  const header = content.substring(0, startIndex + startMarker.length);
  const footer = content.substring(endIndex);
  const body = content.substring(startIndex + startMarker.length, endIndex);

  // Split items logic (same as before)
  const lines = body.split("\n");
  const items = [];
  let currentItem = [];
  let braceBalance = 0;
  let insideItem = false;

  for (const line of lines) {
    if (!insideItem && line.trim().length === 0) continue;
    currentItem.push(line);
    insideItem = true;
    for (const char of line) {
      if (char === "{") braceBalance++;
      if (char === "}") braceBalance--;
    }
    if (braceBalance === 0 && currentItem.length > 0) {
      items.push(currentItem.join("\n"));
      currentItem = [];
      insideItem = false;
    }
  }

  // Map items by ID
  const itemMap = {};
  items.forEach((item) => {
    // Extract ID. format: id: "value",
    const match = item.match(/id:\s*"([^"]+)"/);
    if (match) {
      itemMap[match[1]] = item;
    }
  });

  // Reconstruct in order
  const orderedItems = [];
  originalOrder.forEach((id) => {
    if (itemMap[id]) {
      orderedItems.push(itemMap[id]);
    } else {
      console.warn(
        `Warning: Original category '${id}' not found in current file.`,
      );
    }
  });

  // Check for any missing items (newly added?)
  Object.keys(itemMap).forEach((id) => {
    if (!originalOrder.includes(id)) {
      console.warn(
        `Warning: Found category '${id}' which was not in original list. Appending it.`,
      );
      orderedItems.push(itemMap[id]);
    }
  });

  const newBody = "\n" + orderedItems.join("\n");
  const newContent = header + newBody + footer;

  fs.writeFileSync(path, newContent);
  console.log("Successfully restored category order.");
} catch (err) {
  console.error(err);
  process.exit(1);
}
