const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4173;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '/landing' || reqPath === '/landing/') reqPath = '/landing.html';
    if (reqPath === '/thank-you' || reqPath === '/thank-you/') reqPath = '/thank-you.html';

    const filePath = path.join(__dirname, reqPath);
    const ext = path.extname(filePath).toLowerCase();

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Preview server running at http://localhost:${PORT}/landing.html`);
});
