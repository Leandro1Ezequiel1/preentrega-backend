const ProductManager = require("./Products");
const productManager = new ProductManager("products.json");


productManager.addProduct('Producto1', 'Descripción del producto 1', 10, '.jpg', '001', 100);
productManager.addProduct('Producto2', 'Descripción del producto 2', 20, 'jpg', '002', 50);
productManager.addProduct('Producto3', 'Descripción del producto 3', 30, 'jpg', '003', 200);

const productList = productManager.getProducts();

for (const product of productList) {
  console.log(`ID: ${product.id}`);
  console.log(`Título: ${product.title}`);
  console.log(`Descripción: ${product.description}`);
  console.log(`Precio: ${product.price}`);
  console.log(`Thumbnail: ${product.thumbnail}`);
  console.log(`Código: ${product.code}`);
  console.log(`Stock: ${product.stock}`);
  console.log('---------------------');
}

    
  