import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authR from "./routes/authR.js";
import itemR from "./routes/itemR.js";
import storeR from "./routes/storeR.js";

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
app.use('/api/items', itemR);
app.use('/api/store', storeR);


app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});


