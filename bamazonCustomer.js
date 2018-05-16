var promptUser = require('./promptUser.js')
var products = require('./products.js')


products.getProducts();
promptUser.promptUser();
products.checkInventory();
products.orderProduct();
products.outOfStock();
