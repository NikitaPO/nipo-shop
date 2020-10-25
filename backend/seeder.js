import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import users from "./data/users.js";
import products from "./data/products.js";
import colors from "colors";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    let createdProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(createdProducts);
    console.log(`Data was imported!`.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("All data was destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
