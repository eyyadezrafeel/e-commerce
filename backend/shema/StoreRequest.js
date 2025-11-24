// models/StoreRequest.js
import mongoose from "mongoose";

const StoreRequest = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },

    storeName: { 
      type: String, 
      required: true,
      trim: true 
    },

    storeEmail: { 
      type: String, 
      required: true,
      trim: true 
    },

    description: { 
      type: String, 
      required: true 
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    }
  },
  { timestamps: true }
);

export default mongoose.model("StoreRequest", StoreRequest);
