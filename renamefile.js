const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.rename('./files/writefilesample.txt', './files/updatedwritefilesample.txt', function(err) {
        if (err) {
            res.write(err);
        } else {
            res.write('Files renamed successfully.')
        }
        res.end();
    })

}).listen(8080);