/* create database bamazon */
use bamazon
create table products(
    item_id int not null auto_increment,
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price int default 0,
    stock_quantity int default 0
    PRIMARY KEY (item_id)
)