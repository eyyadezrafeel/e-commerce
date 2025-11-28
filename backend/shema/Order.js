import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true }, // store owner reference
  quantity: { type: Number, required: true },
  priceAtPurchase: { type: Number, required: true }, // snapshot of item price at purchase
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    items: [orderItemSchema],

    totalPrice: { type: Number, required: true },

    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
