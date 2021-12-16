const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
    debugger;
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log(files);
            let fileoldpath = files.filetoupload.filepath;
            let filenewpath = './files/' + files.filetoupload.originalFilename;
            console.log('fileoldpath ' + fileoldpath);
            fs.copyFile(fileoldpath, filenewpath, function (err) {
                if (err) {
                    throw err;
                    // res.writeHead(200, { 'content-type': 'text/html' });
                    // res.write(err);
                    // res.end();
                }
                else {
                    res.write('File uploaded');
                    res.end();
                }
            });
        });
    }
    else {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>')
        res.end();
    }
}).listen(8080);