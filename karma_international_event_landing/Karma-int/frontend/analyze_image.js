import { Jimp } from 'jimp';

async function analyzeImage() {
    const imgPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\0173651c-61d6-4b85-8b5f-0b9831366099\\media__1779961110022.jpg';
    const img = await Jimp.read(imgPath);
    
    console.log(`Image dimensions: ${img.bitmap.width}x${img.bitmap.height}`);
    
    // Check colors down the middle to find where the flyer starts and ends
    const midX = Math.floor(img.bitmap.width / 2);
    let previousColor = '';
    for (let y = 0; y < img.bitmap.height; y += 10) {
        const hex = img.getPixelColor(midX, y);
        const rgba = Jimp.intToRGBA ? Jimp.intToRGBA(hex) : {
            r: (hex >>> 24) & 255,
            g: (hex >>> 16) & 255,
            b: (hex >>> 8) & 255
        };
        const colorStr = `${rgba.r},${rgba.g},${rgba.b}`;
        if (colorStr !== previousColor) {
            console.log(`y=${y}: rgb(${colorStr})`);
            previousColor = colorStr;
        }
    }
}
analyzeImage();
