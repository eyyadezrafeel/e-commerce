import Order from "../shema/Order.js";
import Item from "../shema/Item.js";


// Create a new order
export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const userName = req.user.name;
    const { items } = req.body; // items = [{ item: itemId, quantity: x }, ...]

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;
    const orderItems = [];

    for (const cartItem of items) {
      const product = await Item.findById(cartItem.item).populate("store");
      if (!product) continue;

      orderItems.push({
        item: product._id,
        store: product.store._id,
        quantity: cartItem.quantity,
        priceAtPurchase: product.price,
      });

      total += product.price * cartItem.quantity;

      // Notify the store owner
      const message = `User ${userName} purchased ${cartItem.quantity} x ${product.name} (ID: ${product._id}) for $${product.price * cartItem.quantity}`;
      await Notification.create({
        store: product.store._id,
        message,
      });
    }

    const order = await Order.create({
      user: userId,
      items: orderItems,
      totalPrice: total,
    });

    const populatedOrder = await Order.findById(order._id)
      .populate("items.item")
      .populate("items.store")
      .populate("user", "name email");

    res.status(201).json({ message: "Order created successfully", order: populatedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders for logged-in user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate("items.item")
      .populate("items.store")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.item")
      .populate("items.store")
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status (admin)
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
