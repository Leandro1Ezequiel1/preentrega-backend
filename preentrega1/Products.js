class ProductManager {
    constructor() {
    this.title = '0';
    this.description = '0';
    this.price = '0';
    this.thumbnail = '0';
    this.code = '0';
    this.stock = '0';
    this.products = [];
    this.productIdCounter = 1;
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
    console.log("Todos los campos son obligatorios.");
    return;
    }
  
    const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      console.log("El código de producto ya existe.");
      return;
    }
    
    const newProduct = {
      id: this.productIdCounter,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    this.productIdCounter++;
    console.log(`Agregado al carrito: ${newProduct.title}`);
    }
    
    getProducts() {
    return this.products;
    }
    
    getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
    console.log("Producto no encontrado.");
    return;
    }
    return product;
    }
    }
    
    module.exports = ProductManager;
    
    
    