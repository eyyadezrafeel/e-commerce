import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  description: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
}, { timestamps: true });

const Store = mongoose.model("Store", storeSchema);
export default Store;
