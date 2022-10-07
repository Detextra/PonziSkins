const http = require('http');

// creation of the node server
let interface = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Ponzi skins\n');
});

// utilisation of the port 3000
interface.listen(3000, '127.0.0.1');
console.log('Server running on http://localhost:3000/');