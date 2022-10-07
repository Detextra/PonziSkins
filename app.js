const http = require('http');

const db = require("./items");
//console.log(db);

// getting random skins
const keys = Object.keys(db);
const randomIndex = Math.floor(Math.random() * keys.length);
const randomKey = keys[randomIndex];

// getting multiple one
var skins = [];
for (let i=0; i<10; i++) {
    skins.push(db[randomKey]);
}

console.log(skins.length);
//console.log(skins);
console.log(skins[1]['type']+' '+skins[1]['skin']); // to get the type or the skin of an item
console.log(skins[1]['prices'].filter(function (price) {
    return price.seller == "buff163"; // change buff163 by the name of the market
})); // to get the price of a specific market


// creation of the node server
let interface = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Ponzi skins\n');
});

// utilisation of the port 3000
interface.listen(3000, '127.0.0.1');
console.log('Server running on http://localhost:3000/');