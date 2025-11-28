import express from "express";
import { addItemToCart, getCart, updateItemQuantity, removeItemFromCart } from "../controllers/CartC.js";
import auth from "../middleware/auth.js"; // your JWT middleware

const router = express.Router();

router.post("/add", auth, addItemToCart);
router.get("/get", auth, getCart);
router.put("/update", auth, updateItemQuantity);
router.delete("/remove/:itemId", auth, removeItemFromCart);

export default router;
