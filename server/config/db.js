const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    console.error('⚠️  Server will continue running without DB. Fix MONGODB_URI in .env');
    // Do NOT exit — let the server run so frontend still loads
  }
};

module.exports = connectDB;
