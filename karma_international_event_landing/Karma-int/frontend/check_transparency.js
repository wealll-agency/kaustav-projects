import { Jimp } from 'jimp';

async function checkTransparency() {
    const images = ['richa_dave.png', 'harsh_dave.png', 'prarthit_dave.png'];
    for (const imgName of images) {
        try {
            const img = await Jimp.read(`public/images/${imgName}`);
            const hasAlpha = img.hasAlpha();
            console.log(`${imgName} has alpha channel: ${hasAlpha}`);
            
            // Let's also check if there are actual transparent pixels
            let transparentPixels = 0;
            if (hasAlpha) {
                img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
                    const alpha = this.bitmap.data[idx + 3];
                    if (alpha < 255) transparentPixels++;
                });
            }
            console.log(`${imgName} transparent pixels: ${transparentPixels}`);
        } catch (e) {
            console.error(`Error reading ${imgName}:`, e.message);
        }
    }
}

checkTransparency();
