import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // loads .env variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
