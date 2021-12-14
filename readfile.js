const http = require('http')
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('./files/sampletext.txt', function(err, data) {
        if (err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(err);
            res.end();
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        }
    })
}).listen(8080)