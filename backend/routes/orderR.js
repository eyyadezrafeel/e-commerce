import express from "express";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js";
import { protect } from "../middleware/auth.js"; // your JWT auth middleware
import { adminOnly } from "../middleware/admin.js"; // optional admin middleware

const router = express.Router();

router.post("/", protect, createOrder); // user creates order
router.get("/my-orders", protect, getUserOrders); // user sees their orders
router.get("/", protect, adminOnly, getAllOrders); // admin sees all orders
router.put("/:orderId/status", protect, adminOnly, updateOrderStatus); // admin updates status

export default router;
