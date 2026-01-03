// db.js
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'proMongo';

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;