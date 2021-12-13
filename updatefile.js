const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.appendFile('./files/updatesamplefile.txt', '\n\t\tupdate file updated now.', function(err) {
        if (err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(err);
            res.end();
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('update text sample file updated.')
            res.end();
        }
    })
}).listen(8080);