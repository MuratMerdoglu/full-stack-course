const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.write('merhaba node server -- GET');
        if (req.url === "/")
            res.write('root api');
        if (req.url === "/users")
            res.write('users api');
    }

    if (req.method === "POST")
        res.write('merhaba node server -- POST');

    res.end();
});

server.listen(3000);