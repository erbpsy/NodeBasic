const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.unlink('./files/updatesamplefile.txt', function(err) {
        if (err) {
            res.write(err);
        } else {
            res.write('File deleted successfully.');
        }
        res.end();
    });
}).listen(8080)