const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    // create file using appendFile function and write sample text into that
    fs.appendFile('./files/sampletext.txt', 'write sample text to the file new text', function(err) {

        // check if there is any error
        if (err) {

            // create responce header
            res.writeHead(200, { 'Content-Type': 'text/html' });

            // write error details to the screen
            res.write(err);
        }

        // create responce header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // write message to the screen for file create
        res.write('File Saved to the files folder');
        res.end();
    });
}).listen(8080);