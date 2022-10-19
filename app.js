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

//console.log(db[1]['type']+' '+db[1]['skin']+' '+db[1]['state']);
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

// 'Shopping cart' to add skin in it
var cart = []

function addSkinToCart (index) {
    cart.push(db[index]);
}

function removeSkinToCartWithIndex (index) {
    cart.push(db[index]);
}

function removeSkinToCartWithObject (skin) {
    for (var i=0; i<cart.length; i++) {
        if ( Object.deepEquals( JSON.parse(cart[i]) , JSON.parse(skin)) ) {
            cart.pop(i);
        }
    }
}

function removeSkinToCartWithName (name) {
    for (var i=0; i<cart.length; i++) {
        if ( (""+cart[1]['type']+" "+cart[1]['skin']+" "+cart[1]['state'] == ""+name) ||  (""+cart[1]['type']+""+cart[1]['skin']+""+cart[1]['state'] == ""+name) ) {
            cart.pop(i);
        }
    }
}

addSkinToCart(1)
//console.log(db[1]['type']+' '+db[1]['skin']+' '+db[1]['state']);
removeSkinToCartWithName("★ StatTrak™ Talon Knife Safari Mesh Well-Worn");
console.log(cart);