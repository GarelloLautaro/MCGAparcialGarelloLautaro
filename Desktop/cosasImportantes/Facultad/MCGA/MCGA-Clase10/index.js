var lodash = require('lodash')
var prod150 = require('./data/products.json')
var fs = require('fs');

const prod150Filters = prod150.filter(e => e.price > 150);

fs.writeFile('./data/prod150.json', JSON.stringify(lodash.shuffle(prod150Filters)), () => {
    console.log('Ready');
    console.log('Lista filatrada: ', prod150Filters)
    console.log(lodash.shuffle(prod150Filters))
})