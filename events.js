const http = require('http');
const fs = require('fs');
const events = require('events');

http.createServer(function (req, res) {

    // create event emitter object
    let eventEmitter = new events.EventEmitter();

    // create an event handler
    let firstEvent = function () {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('First event called successfully ');
    };

    // assign an event handler to and event (i.e. firstevent)
    eventEmitter.on('firstevent', firstEvent);

    // fire the 'firstevent' event.
    eventEmitter.emit('firstevent');

}).listen(8080);