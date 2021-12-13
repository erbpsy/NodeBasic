const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.writeFile('./files/writefilesample.txt', 'sample data for write file.', function(err) {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('File is created and text is written int the file')
        }
    })
}).listen(8080);