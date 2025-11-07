const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    if (db) return db;
    await client.connect();
    db = client.db('testemongodb2');
    console.log('Conectando ao MongoDB!');
    return db;
  } catch (error) {
    console.log(error);
  }
}

function getDb() {
  if (!db) throw new Error('DB não conectado. Chame connect() antes.');
  return db;
}

module.exports = { connect, getDb };
