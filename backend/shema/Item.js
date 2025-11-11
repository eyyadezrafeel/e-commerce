import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },

  // Relations
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },

  // Ratings embedded
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
    },
  ],
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);
export default Item;
