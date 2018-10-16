create table products(
id serial primary key,
shelf text,
bin text,
prod_name text,
price int,
img text 
) 
 

insert into products(shelf, bin, prod_name, price, img) 
values('A', '1', 'shirt', '12', 'https://media.kohlsimg.com/is/image/kohls/3362173?wid=500&hei=500&op_sharpen=1')

insert into products(shelf, bin, prod_name, price, img) 
values('B', '1', 'pants', '20', 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw5314dad0/product_images/0133436750026NEW_00_025.jpg?sw=458&sh=710&sm=fit')
