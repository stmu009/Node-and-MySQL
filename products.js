var mysql = require('mysql')


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bamazon'
  });

var getProducts =  () => {
    console.log('Get Products ')
    connection.query('SELECT * from products', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        return results
      });
};
var checkInventory =  () => {console.log('Check Inventory')};
var orderProduct =  () => {console.log('Order Product')};
var outOfStock =  () => {console.log('Out of Stock')};


module.exports.getProducts = getProducts;
module.exports.checkInventory = checkInventory;
module.exports.orderProduct = orderProduct;
module.exports.outOfStock = outOfStock;