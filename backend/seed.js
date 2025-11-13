import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./shema/Category.js";
import SubCategory from "./shema/SubCategory.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

console.log("🌱 Seeding database...");

// Clear existing data
await Category.deleteMany();
await SubCategory.deleteMany();

// Create main categories
const categories = await Category.insertMany([
  { name: "Tools" },
  { name: "Electronics" },
  { name: "Accessories" },
]);

// Create subcategories
const subcategories = await SubCategory.insertMany([
  { name: "Battery Charger", parentCategory: categories[0]._id },
  { name: "Car Jack", parentCategory: categories[0]._id },
  { name: "Wrench", parentCategory: categories[0]._id },

  { name: "Phone Holder", parentCategory: categories[1]._id },
  { name: "GPS Tracker", parentCategory: categories[1]._id },
  { name: "Dash Cam", parentCategory: categories[1]._id },

  { name: "Seat Covers", parentCategory: categories[2]._id },
  { name: "Air Freshener", parentCategory: categories[2]._id },
  { name: "Floor Mats", parentCategory: categories[2]._id },
]);

console.log("✅ Database seeded successfully!");
process.exit();
