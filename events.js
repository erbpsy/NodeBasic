const http = require('http');
const fs = require('fs');
const events = require('events');

http.createServer(function (req, res) {

    let eventEmitter = new events.EventEmitter();

    let firstEvent = function () {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('First event called successfully ');
    };

    eventEmitter.on('firstevent', firstEvent);

    eventEmitter.emit('firstevent');

}).listen(8080);