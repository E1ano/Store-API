const dotenv = require('dotenv');
const path = require('path');
const { connectToDatabase } = require('./db/connect');
const Product = require('./models/product');
const productsJSON = require('./products.json');

// Load environment variables from config.env
dotenv.config({ path: path.join(__dirname, 'config.env') });

const DATABASE = process.env.DATABASE.replace(
  '<db_password>',
  process.env.MONGODB_PASSWORD
);

const start = async () => {
  try {
    // Connect to the database
    await connectToDatabase(DATABASE);
    // Clear and add data to the database
    await Product.deleteMany();
    await Product.create(productsJSON);
    process.exit(0); // Indicates successful completion
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Terminate the process if the database fails to connect
  }
};

start();
