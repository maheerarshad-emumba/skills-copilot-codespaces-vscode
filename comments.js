// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file using the fs module. If the file is not found, the server should respond with a 404 status code.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'comments.json');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
});
