const http = require('http');
const uc = require('upper-case');
http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(uc.upperCase('upper case node module used'));
    res.end();
}).listen(8080);