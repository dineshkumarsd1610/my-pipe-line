// Import the required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port for the server to listen on
const PORT = 3000;

// Create the HTTP server
http.createServer((req, res) => {
  // Serve the HTML file when the request is for the root route
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  // Serve the HTML content
      }
    });
  }
  // Serve the CSS file when the request is for the stylesheet
  else if (req.url === '/styles.css') {
    fs.readFile(path.join(__dirname, 'styles.css'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading CSS file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);  // Serve the CSS content
      }
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
