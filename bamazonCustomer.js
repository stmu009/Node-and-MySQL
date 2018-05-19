var promptUser = require('./promptUser.js')
var products = require('./products.js')


products.getProducts();
// console.log(products.getProducts());
// console.log('resultProducts',resultProducts());

promptUser.promptUser()
products.checkInventory();
products.orderProduct();
products.outOfStock();