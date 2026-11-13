import { Jimp } from 'jimp';

async function findBounds() {
    const imgPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\0173651c-61d6-4b85-8b5f-0b9831366099\\media__1779961110022.jpg';
    const img = await Jimp.read(imgPath);
    
    // Find left bound at y=200
    for(let x=0; x<img.bitmap.width; x+=5) {
        const hex = img.getPixelColor(x, 200);
        const rgba = Jimp.intToRGBA ? Jimp.intToRGBA(hex) : { r: (hex >>> 24) & 255, g: (hex >>> 16) & 255, b: (hex >>> 8) & 255 };
        console.log(`x=${x}, y=200: rgb(${rgba.r},${rgba.g},${rgba.b})`);
        if (x > 150) break;
    }
}
findBounds();
