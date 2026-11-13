import { Jimp } from 'jimp';

async function makeGlitter() {
    try {
        const width = 512;
        const height = 512;
        const img = new Jimp({ width, height });
        
        // Rich gold palette to simulate glitter
        const colors = [
            {r: 255, g: 255, b: 210}, // sparkle white/gold
            {r: 252, g: 246, b: 186}, // very bright
            {r: 212, g: 175, b: 55},  // classic gold
            {r: 191, g: 149, b: 63},  // medium gold
            {r: 170, g: 119, b: 28},  // dark gold
            {r: 100, g: 60, b: 10}    // deep shadow gold
        ];

        for(let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                const c = colors[Math.floor(Math.random() * colors.length)];
                
                let r = Math.min(255, Math.max(0, c.r + (Math.random() * 30 - 15)));
                let g = Math.min(255, Math.max(0, c.g + (Math.random() * 30 - 15)));
                let b = Math.min(255, Math.max(0, c.b + (Math.random() * 30 - 15)));
                
                const hex = ((r << 24) | (g << 16) | (b << 8) | 255) >>> 0;
                img.setPixelColor(hex, x, y);
            }
        }
        await img.write('public/images/glitter.jpg');
        console.log("Successfully created glitter.jpg");
    } catch (e) {
        console.error("Error creating glitter:", e);
    }
}
makeGlitter();
