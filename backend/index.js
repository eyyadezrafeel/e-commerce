import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authR from "./routes/authR.js";

dotenv.config();
const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected")

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use("/api/auth",authR);


app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});


