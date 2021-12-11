const http = require('http');
const date = require('./date');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('Hello World!, Current Date and Time is: ' + date.CurrentDateTime());
}).listen('8080');