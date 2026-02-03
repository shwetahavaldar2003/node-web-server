# Node.js Web Server - Laundry Services

A simple web server built with Node.js HTTP module that serves different HTML pages for a laundry service website.

## Project Structure

```
node-web-server/
├── server.js              # Main server file
├── package.json           # Project configuration
├── README.md             # Project documentation
└── public/               # Static files directory
    ├── home.html         # Home page
    ├── about.html        # About page
    ├── contact.html      # Contact page
    ├── 404.html          # Error page
    └── css/
        └── style.css     # Stylesheet
```

## How to Run

1. Navigate to the project directory:
   ```bash
   cd node-web-server
   ```

2. Start the server:
   ```bash
   node server.js
   ```


3. Open browser and visit:
   - http://localhost:3000/home (or http://localhost:3000/)
   - http://localhost:3000/about
   - http://localhost:3000/contact

## How the Server Works

# Core Components

**1. HTTP Server Creation**
```javascript
const server = http.createServer((req, res) => {
    // Request handling logic
});
```
The server uses Node.js built-in `http` module to create a web server that listens for incoming HTTP requests.

**2. URL Routing**
```javascript
const url = req.url.split('?')[0];
switch (url) {
    case '/':
    case '/home':
        serveFile(res, 'public/home.html', 'text/html');
        break;
    // More routes...
}
```
The server implements basic routing by examining the request URL and serving appropriate files.

**3. File Serving Function**
```javascript
function serveFile(res, filePath, contentType, statusCode = 200) {
    fs.readFile(fullPath, (err, data) => {
        // File reading and response logic
    });
}
```
A reusable function that reads files from disk and sends them as HTTP responses with proper headers.

### Request Flow

1. **Client Request**: Browser sends HTTP request to server
2. **URL Parsing**: Server extracts the path from request URL
3. **Route Matching**: Switch statement matches URL to appropriate handler
4. **File Reading**: Server reads the corresponding HTML/CSS file from disk
5. **Response**: Server sends file content back with proper HTTP headers
6. **Error Handling**: If file not found, serves 404.html page

### Available Routes

- **`/` or `/home`**: Serves home.html - Main landing page with services
- **`/about`**: Serves about.html - Company information and values
- **`/contact`**: Serves contact.html - Contact form and business details
- **`/css/style.css`**: Serves CSS stylesheet for all pages
- **Any other URL**: Serves 404.html - Error page for invalid routes

### Features

- **Static File Serving**: Serves HTML, CSS files from public directory
- **Content-Type Headers**: Proper MIME types for different file types
- **Error Handling**: 404 page for non-existent routes
- **Clean URLs**: Simple, SEO-friendly route structure
- **Responsive Design**: Mobile-friendly CSS styling

### Technical Details

- **Port**: Server runs on port 3000
- **File System**: Uses `fs.readFile()` for asynchronous file operations
- **Path Handling**: Uses `path.join()` for secure file path construction
- **HTTP Status Codes**: Returns 200 for success, 404 for not found
- **Content Types**: Serves `text/html` for HTML files, `text/css` for stylesheets
