const Product = require('../models/Product');

class ProductController {
  static async getProducts(req, res) {
    const productModel = new Product();
    let products = await productModel.get();
    const emptyProducts = products.length === 0;
    res.render('products/all', { products, emptyProducts });
  }

  static createProductsView(req, res) {
    res.render('products/create');
  }

  static async createProductsData(req, res) {
    const { name, image, price, description } = req.body;

    const product = new Product(name, image, price, description);

    await product.handle();
    res.render('products/all');
  }
}

module.exports = ProductController;
