import Cart from "../shema/Cart.js";
import Item from "../shema/Item.js";

export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.id; // user must be logged in
    const { itemId, quantity } = req.body;

    if (!itemId) {
      return res.status(400).json({ message: "Item ID is required" });
    }

    const qty = quantity || 1;

    // Ensure item exists
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    // Find existing cart or create one
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ item: itemId, quantity: qty }],
      });
    } else {
      // Check if item already in cart
      const existing = cart.items.find((i) => String(i.item) === String(itemId));

      if (existing) {
        existing.quantity += qty; // increase quantity
      } else {
        cart.items.push({ item: itemId, quantity: qty });
      }
    }

    await cart.save();

    const populated = await Cart.findById(cart._id).populate("items.item");

    res.status(200).json({ message: "Item added to cart", cart: populated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.item");

    if (!cart) return res.status(200).json({ items: [] });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateItemQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId, quantity } = req.body;

    if (!itemId) return res.status(400).json({ message: "Item ID required" });

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const entry = cart.items.find((i) => String(i.item) === String(itemId));
    if (!entry) return res.status(404).json({ message: "Item not in cart" });

    entry.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Quantity updated", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const removeItemFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((i) => String(i.item) !== String(itemId));
    await cart.save();

    res.status(200).json({ message: "Item removed", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
