const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //get query string data
    var queryString = url.parse(req.url, true).query;

    // get year and month values from query string
    var queryStringData = "Year: " + queryString.year + " Month: " + queryString.month;

    // write year and month data to the screen
    res.write(queryStringData);
    res.end();
}).listen(8080);