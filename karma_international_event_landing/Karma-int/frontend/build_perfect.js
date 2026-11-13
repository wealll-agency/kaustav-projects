import { Jimp } from 'jimp';

async function buildPerfectFlyer() {
    try {
        // Load the original screenshot
        const screenshotPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\0173651c-61d6-4b85-8b5f-0b9831366099\\media__1779961110022.jpg';
        const bg = await Jimp.read(screenshotPath);
        
        // Crop the true flyer out of the WhatsApp UI
        bg.crop({ x: 0, y: 100, w: 815, h: 860 });

        // We will paint a black hole over the woman to completely erase her white suit and face, 
        // so she doesn't ghost behind the 3 new speakers.
        // We will use a soft radial gradient in Jimp to blend the black hole into the background rays.
        const centerX = 407;
        const centerY = 380;
        const radius = 250;

        for(let y = 180; y < 600; y++) {
            for(let x = 100; x < 715; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                const distance = Math.sqrt(dx*dx + dy*dy);
                
                if (distance < radius) {
                    // Feather the edge of the black hole
                    const feather = 40;
                    let opacity = 1;
                    if (distance > radius - feather) {
                        opacity = 1 - ((distance - (radius - feather)) / feather);
                    }
                    
                    const hex = bg.getPixelColor(x, y);
                    let r = (hex >>> 24) & 0xFF;
                    let g = (hex >>> 16) & 0xFF;
                    let b = (hex >>> 8) & 0xFF;
                    let a = hex & 0xFF;
                    
                    r = Math.floor(r * (1 - opacity));
                    g = Math.floor(g * (1 - opacity));
                    b = Math.floor(b * (1 - opacity));
                    
                    const newHex = ((r << 24) | (g << 16) | (b << 8) | a) >>> 0;
                    bg.setPixelColor(newHex, x, y);
                }
            }
        }

        await bg.write('public/images/perfect_flyer_bg.jpg');
        console.log("Created perfect_flyer_bg.jpg");

    } catch (e) {
        console.error("Error:", e);
    }
}
buildPerfectFlyer();
