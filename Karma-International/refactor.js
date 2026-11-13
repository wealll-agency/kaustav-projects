const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const crypto = require('crypto');

const htmlFiles = [
  'index.html',
  'about.html',
  'event.html',
  'gallery.html',
  'contact.html',
  'sponsor.html',
  'educator.html'
];

let customCss = '\n/* --- AUTO-EXTRACTED INLINE CSS --- */\n';
let styleMap = new Map();

const semanticRules = {
  'font-family: \'Playfair Display\', serif;': 'font-playfair',
  'font-family: \'Inter\', sans-serif;': 'font-inter',
  'color: #c9a45c;': 'text-karma-gold',
  'background-color: #c9a45c;': 'bg-karma-gold',
  'background-color: #000;': 'bg-pure-black',
  'z-index: 2;': 'z-index-2',
  'z-index: 10;': 'z-index-10',
  'border-radius: 4px;': 'rounded-4px',
  'border-radius: 50%;': 'rounded-circle-custom',
  'letter-spacing: 2px;': 'ls-2',
  'letter-spacing: 4px;': 'ls-4',
  'letter-spacing: 6px;': 'ls-6',
  'text-transform: uppercase;': 'text-uppercase',
};

function generateClassName(styleStr) {
  const cleanStyle = styleStr.trim().replace(/\s+/g, ' ').replace(/;$/, '');
  
  if (semanticRules[cleanStyle + ';']) return semanticRules[cleanStyle + ';'];
  
  let hash = crypto.createHash('md5').update(cleanStyle).digest('hex').substring(0, 6);
  if (cleanStyle.includes('background-image')) return `custom-bg-${hash}`;
  if (cleanStyle.includes('linear-gradient')) return `custom-gradient-${hash}`;
  if (cleanStyle.includes('Playfair')) return `custom-playfair-${hash}`;
  
  return `custom-style-${hash}`;
}

htmlFiles.forEach(file => {
  const filePath = path.join('D:/Kaustav/Projects/Karma-International', file);
  if (!fs.existsSync(filePath)) return;

  const html = fs.readFileSync(filePath, 'utf8');
  // Disable self-closing tags enforcement for normal tags which can break HTML structure
  const $ = cheerio.load(html, { decodeEntities: false });

  $('[style]').each((i, el) => {
    const styleStr = $(el).attr('style');
    if (!styleStr || styleStr.trim() === '') return;

    const normalizedStyle = styleStr.trim().replace(/\s+/g, ' ');
    
    let className = styleMap.get(normalizedStyle);
    if (!className) {
      className = generateClassName(normalizedStyle);
      
      let counter = 1;
      let finalClassName = className;
      while ([...styleMap.values()].includes(finalClassName)) {
        let existingKey = [...styleMap.keys()].find(k => styleMap.get(k) === finalClassName);
        if (existingKey === normalizedStyle) break;
        finalClassName = `${className}-${counter}`;
        counter++;
      }
      
      styleMap.set(normalizedStyle, finalClassName);
      
      customCss += `.${finalClassName} {\n  ${normalizedStyle.split(';').map(s => s.trim()).filter(s => s).join(';\n  ')};\n}\n`;
    }

    $(el).addClass(className);
    $(el).removeAttr('style');
  });

  // Re-write HTML file. Note: Cheerio's html() can reformat the document slightly.
  // By default, it produces valid HTML.
  fs.writeFileSync(filePath, $.html());
  console.log(`Processed ${file}`);
});

const cssPath = path.join('D:/Kaustav/Projects/Karma-International', 'assets/css/style.css');
if (fs.existsSync(cssPath)) {
  fs.appendFileSync(cssPath, customCss);
  console.log('Appended extracted CSS to style.css');
}

console.log('Done!');
