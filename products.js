var mysql = require('mysql')
var Table = require('cli-table');
var table = new Table({
  head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'],
  colWidths: [10, 25, 25, 15, 20]
});
var promptUser = require('./promptUser.js')



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bamazon'
});

var getProducts = () => {
  console.log('Get Products ')
  connection.query('SELECT item_id, product_name, department_name, price, stock_quantity from products', function (error, results, fields) {
    if (error) throw error;
    results.forEach(element => {
      table.push([element.item_id, element.product_name, element.department_name, element.price, element.stock_quantity])
    });
    console.log(table.toString());

    // return table.toString()
  });
};
var checkInventory = () => {
  console.log('Check Inventory')
};
var orderProduct = () => {
  console.log('Order Product')
};
var outOfStock = () => {
  console.log('Out of Stock')
};


module.exports.getProducts = getProducts;
module.exports.checkInventory = checkInventory;
module.exports.orderProduct = orderProduct;
module.exports.outOfStock = outOfStock;