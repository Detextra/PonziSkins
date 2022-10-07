const db = require("./items");
//console.log(db);

// getting random skins
const keys = Object.keys(db);
const randomIndex = Math.floor(Math.random() * keys.length);
const randomKey = keys[randomIndex];

// pie chart values
var skinsPie = [{
    names: [], 
    skin: [],
    type: 'pie'
}];

// getting skins and putting these values into a pieData
var skins = [];

for (let i=0; i<10; i++) {
    skins.push(db[randomKey]);
    skinsPie[0]['skin'].push(skins[i]['skin']);
    skinsPie[0]['names'].push(skins[i]['type']);
}

console.log(skins.length);
//console.log(skins);
/*console.log(skins[1]['type']+' '+skins[1]['skin']); // to get the type or the skin of an item
var skin1 = skins[1]['prices'].filter(function (price) {
    return price.seller == "buff163"; // change buff163 by the name of the market
})[0]['price']; // to get the price of a specific market
console.log(skin1);*/

//console.log(skins[1]);

// Pie chart purpose
var layout = {
    height: 400,
    width: 500
};


