const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    
    const url = req.url.split('?')[0];
    
    // Route handling
    switch (url) {
        case '/':
        case '/home':
            serveFile(res, 'public/home.html', 'text/html');
            break;
        case '/about':
            serveFile(res, 'public/about.html', 'text/html');
            break;
        case '/contact':
            serveFile(res, 'public/contact.html', 'text/html');
            break;
        case '/css/style.css':
            serveFile(res, 'public/css/style.css', 'text/css');
            break;
        default:
            // 404 - Page not found
            serveFile(res, 'public/404.html', 'text/html', 404);
            break;
    }
});

// Function to serve files
function serveFile(res, filePath, contentType, statusCode = 200) {
    const fullPath = path.join(__dirname, filePath);
    
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            // If file not found, serve 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>');
            return;
        }
        
        // Serve the file
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(data);
    });
}

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('- http://localhost:3000/home');
    console.log('- http://localhost:3000/about');
    console.log('- http://localhost:3000/contact');
});