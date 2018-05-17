 /* create database bamazon  */
 use bamazon;
 /* create table products(
     item_id int not null auto_increment,
     product_name varchar(100) not null,
     department_name varchar(100) not null,
     price decimal(10,2) not null,
     stock_quantity int default 0,
     PRIMARY KEY (item_id)
 ); */

/* insert into products(product_name, department_name, price, stock_quantity)
values('Elmo', 'toys', '19.99', 4)  
('iMac', 'electronics', '1999.99', 10),
('2018 Tesla Model X', 'automobile', '199999.99', 4),
('Coca Cola', 'drinks', '1.99', 4000),
('Japanese Cherry Blossom', 'trees', '1999.99', 4),
('Wallet', 'apparel', '19.99', 40),
('Reese''s', 'candy', '1.99', 400),
('Yo Yo', 'toys', '1.99', 400),
('Ball', 'toys', '19.99', 400),
('iPad', 'electronics', '599.99', 40) ; */


select * from products