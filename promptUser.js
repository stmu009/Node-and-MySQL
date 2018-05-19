var inquirer = require('inquirer')
var products = require('./products.js')





// var productResults={};
// productResults = products.getProducts();
// console.log('!!!product Results', products.getProducts());


var promptUser = () => {
    console.log('Prompt User')
    console.log('which product?');
    console.log('choices from database')
    console.log('how many?');

};


module.exports.promptUser = promptUser;

