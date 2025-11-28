import express from "express";
import { addItemToCart, getCart, updateItemQuantity, removeItemFromCart } from "../controllers/CartC.js";
import authM from "../middleware/authM.js"; // your JWT middleware

const router = express.Router();

router.post("/add", authM, addItemToCart);
router.get("/get", authM, getCart);
router.put("/update", authM, updateItemQuantity);
router.delete("/remove/:itemId", authM, removeItemFromCart);

export default router;
