let http = require('http');
let url = require('url');
let fs = require('fs');
let formidable = require('formidable');


http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true);
    let filename = "./index.html";
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    console.log(req.url);
}).listen(8080);