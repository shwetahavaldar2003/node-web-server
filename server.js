var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var url = req.url;
    
    if (url === '/' || url === '/home') {
        fs.readFile('public/home.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('Error loading page');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if (url === '/about') {
        fs.readFile('public/about.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('Error loading page');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if (url === '/contact') {
        fs.readFile('public/contact.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('Error loading page');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if (url === '/css/style.css') {
        fs.readFile('public/css/style.css', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('Error loading CSS');
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            }
        });
    }
    else {
        fs.readFile('public/404.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('Page not found');
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
});

server.listen(3000);
console.log('Server running on port 3000');