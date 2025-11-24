import Item from '../shema/Item.js';
import Store from '../shema/Store.js';
import User from '../shema/User.js';

export const createItem = async (req, res) => {
  try {
    const { name, description, price, store, category, subcategory } = req.body;

    // Require authenticated user
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });

    // Require store owner role
    if (req.user.role !== 'storeOwner') return res.status(403).json({ message: 'Only store owners can add items' });

    if (!name || !price || !category) {
      return res.status(400).json({ message: 'Missing required fields: name, price or category' });
    }

    // Determine store: either provided in body or infer from user's store
    let storeId = store;
    if (!storeId) {
      const ownerStore = await Store.findOne({ owner: req.user.id });
      if (!ownerStore) return res.status(403).json({ message: 'You do not have a store. Request store ownership first.' });
      storeId = ownerStore._id;
    } else {
      // ensure the provided store belongs to the user
      const providedStore = await Store.findById(storeId);
      if (!providedStore) return res.status(400).json({ message: 'Provided store not found' });
      if (String(providedStore.owner) !== String(req.user.id)) {
        return res.status(403).json({ message: 'You can only add items to your own store' });
      }
    }

    const newItem = new Item({
      name,
      description,
      price,
      store: storeId,
      category,
      subcategory,
    });

    await newItem.save();
  // add item to store's items array (keep relation in sync)
  await Store.findByIdAndUpdate(storeId, { $addToSet: { items: newItem._id } });
  // populate refs for response
  const populated = await Item.findById(newItem._id).populate('store category subcategory');
  res.status(201).json({ message: 'Item created successfully', item: populated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const { store, category, subcategory, q } = req.query;
    const filter = {};

    if (store) filter.store = store;
    if (category) filter.category = category;
    if (subcategory) filter.subcategory = subcategory;
    if (q) filter.name = { $regex: q, $options: 'i' };

    const items = await Item.find(filter).populate('store category subcategory').sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id).populate('store category subcategory ratings.user');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};