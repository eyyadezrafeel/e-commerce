import express from "express";
import { addItemToCart, getCart, updateItemQuantity, removeItemFromCart } from "../controllers/cartController.js";
import auth from "../middleware/auth.js"; // your JWT middleware

const router = express.Router();

router.post("/cart/add", auth, addItemToCart);
router.get("/cart", auth, getCart);
router.put("/cart/update", auth, updateItemQuantity);
router.delete("/cart/remove/:itemId", auth, removeItemFromCart);

export default router;
