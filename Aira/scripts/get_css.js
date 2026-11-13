const res = await fetch('https://demo2.themelexus.com/beautifo/');
const html = await res.text();
const cssMatches = html.match(/href="([^"]+\.css[^"]*)"/g) || [];
for (const m of cssMatches) {
  const url = m.slice(6, -1);
  try {
    const css = await (await fetch(url)).text();
    const idx = css.indexOf('.product-thumbnail');
    if (idx !== -1) {
      console.log('Found in', url);
      console.log(css.substring(idx, idx + 600));
      break;
    }
  } catch(e) {}
}
