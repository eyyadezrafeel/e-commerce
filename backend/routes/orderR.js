import express from "express";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/OrderC.js";
import authM from "../middleware/authM.js"; // your JWT auth middleware


const router = express.Router();

router.post("/create", authM, createOrder); // user creates order
router.get("/my-orders", authM, getUserOrders); // user sees their orders
router.get("/store-orders", authM, getAllOrders); // admin sees all orders
router.put("/:orderId/status", authM, updateOrderStatus); // admin updates status

export default router;
