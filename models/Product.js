const { getDb } = require('../db/conn');

const { ObjectId } = require('mongodb');

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  get() {
    const db = getDb();
    return db.collection('products').find({}).toArray();
  }

  async getById(id) {
    const db = getDb();
    return db.collection('products').findOne({ _id: new ObjectId(id) });
  }

  async handle() {
    const db = getDb();
    const result = await db.collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
      createdAt: new Date(),
    });

    return result.insertedId;
  }

  update() {}
  delete() {}
}

module.exports = Product;
