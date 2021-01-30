const http = require('http');

const server = http.createServer(function (req, res) {   //create web server
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/':
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write('Status : OK');
                    res.end();
                    break;
                case 'tutorial':
                    break;
                default:
                    res.end('Invalid Request!');
                    break;
            }
            break;
        case 'POST':
            if (req.url === '/generate') { //check the URL of the current request
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({message: "Hello World"}));
                res.end();
            } else {
                res.end('Invalid Request!');
            }
            break;
        default:
            res.end('Invalid Request!');
    }
});

server.listen(2000);
console.log('Node.js PDF creation server at port 2000 is running..')