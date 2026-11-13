const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { minify } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const Terser = require('terser');

const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');

const htmlMinifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    ignoreCustomFragments: [/<\\?php[\\s\\S]*?\\?>/]
};

// 1. Clean dist folder
if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

let jsHashMap = {};

async function build() {
    console.log("Starting Advanced Build Process...");

    // Helper to get all files
    function getAllFiles(dir, fileList = []) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                if (file !== 'fonts') { // Ignore static fonts dir for now
                    getAllFiles(filePath, fileList);
                }
            } else {
                fileList.push(filePath);
            }
        }
        return fileList;
    }

    const allFiles = getAllFiles(srcDir);

    // Pass 1: Process JS files to generate hashes
    for (const srcPath of allFiles) {
        if (path.extname(srcPath).toLowerCase() === '.js') {
            const content = fs.readFileSync(srcPath, 'utf8');
            console.log(`Obfuscating JS: ${srcPath}`);
            const result = await Terser.minify(content, {
                mangle: true,
                compress: true,
                sourceMap: false // Ensure no source maps
            });
            const hash = crypto.createHash('md5').update(result.code).digest('hex').substring(0, 8);
            const parsedPath = path.parse(srcPath);
            const hashedFilename = `${parsedPath.name}.${hash}${parsedPath.ext}`;
            
            // Calculate relative path for mapping
            const relPath = path.relative(srcDir, srcPath).replace(/\\/g, '/');
            const relDir = path.dirname(relPath);
            const hashedRelPath = relDir === '.' ? hashedFilename : `${relDir}/${hashedFilename}`;
            
            jsHashMap[relPath] = hashedRelPath;

            const outPath = path.join(outDir, hashedRelPath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.writeFileSync(outPath, result.code);
        }
    }

    // Pass 2: Process everything else
    for (const srcPath of allFiles) {
        const ext = path.extname(srcPath).toLowerCase();
        if (ext === '.js') continue; // Already processed

        const relPath = path.relative(srcDir, srcPath);
        const outPath = path.join(outDir, relPath);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });

        if (ext === '.php' || ext === '.html') {
            if (path.basename(srcPath) === 'api.php') {
                console.log(`Copying api.php`);
                fs.copyFileSync(srcPath, outPath);
                continue;
            }

            let content = fs.readFileSync(srcPath, 'utf8');
            
            // Inject hashed JS filenames
            for (const [orig, hashed] of Object.entries(jsHashMap)) {
                const regex = new RegExp(`src=["']?${orig}["']?`, 'g');
                content = content.replace(regex, `src="${hashed}"`);
            }

            console.log(`Minifying HTML/PHP: ${relPath}`);
            const minified = await minify(content, htmlMinifyOptions);
            fs.writeFileSync(outPath, minified);
        } 
        else if (ext === '.css') {
            console.log(`Minifying CSS: ${relPath}`);
            const content = fs.readFileSync(srcPath, 'utf8');
            const minified = new CleanCSS({}).minify(content).styles;
            fs.writeFileSync(outPath, minified);
        }
        else {
            console.log(`Copying: ${relPath}`);
            fs.copyFileSync(srcPath, outPath);
        }
    }

    // Pass 3: Copy fonts directory statically
    const fontsDir = path.join(srcDir, 'fonts');
    if (fs.existsSync(fontsDir)) {
        console.log(`Copying fonts directory...`);
        fs.cpSync(fontsDir, path.join(outDir, 'fonts'), { recursive: true });
    }

    // Pass 4: Generate .htaccess in dist/
    console.log(`Generating .htaccess...`);
    const htaccessContent = `
<Files "fonts.json">
    Order Deny,Allow
    Deny from all
</Files>
`;
    fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent.trim());

    console.log("Build Process Complete! ✅");
    console.log("Upload ONLY the contents of the 'dist' folder to your server.");
}

build().catch(console.error);
