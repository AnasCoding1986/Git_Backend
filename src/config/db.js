const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of hanging
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Connection Error Details:');
    console.error(`Message: ${error.message}`);
    console.error(`Code: ${error.code}`);
    process.exit(1);
  }
};

module.exports = connectDB;
