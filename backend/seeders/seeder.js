import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../data/users.js";
import products from "../data/products.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import Order from "../models/order.js";
import connectDB from "../config/db.js";

dotenv.config();
const destroyData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data deleted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
const importData = async () => {
  try {
    await connectDB();

    const createdUsers = await User.insertMany(users);
    const adminId = createdUsers[0]._id;
    const newProducts = products.map((product) => {
      return {
        ...product,
        user: adminId,
      };
    });
    await Product.insertMany(newProducts);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
