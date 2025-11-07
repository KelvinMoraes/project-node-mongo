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
    try {
      const { name, image, price, description } = req.body;

      const product = new Product(name, image, price, description);

      await product.handle();

      return ProductController.getProducts(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Erro ao criar produto');
    }
  }
}

module.exports = ProductController;
