import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Example route just to test
app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
