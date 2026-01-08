const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/proMongo';

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('DB Error:', err);
  }
};

module.exports = connectDB;