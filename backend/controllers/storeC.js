import StoreRequest from '../shema/StoreRequest.js';
import Store from '../shema/Store.js';
import User from '../shema/User.js';

// create store request (user fills store name, email, description)
export const createStoreRequest = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });

    const { storeName, storeEmail,phoneNumber, description } = req.body;
    if (!storeName || !storeEmail) return res.status(400).json({ message: 'storeName and storeEmail are required' });

    
    const existing = await StoreRequest.findOne({ user: req.user.id, status: 'pending' });
    if (existing) return res.status(400).json({ message: 'You already have a pending request' });

    const reqDoc = new StoreRequest({ user: req.user.id, storeName, storeEmail,phoneNumber, description });
    await reqDoc.save();
    res.status(201).json({ message: 'Store request submitted', request: reqDoc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// admin: list all requests
export const listStoreRequests = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin access required' });

    const requests = await StoreRequest.find().populate('user').sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// admin accepts request: create a Store, set user.role to storeOwner
export const acceptStoreRequest = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin access required' });
    
    const { id } = req.params;
    const request = await StoreRequest.findById(id);
    
    if (!request) return res.status(404).json({ message: 'Request not found' });
    if (request.status !== 'pending') return res.status(400).json({ message: 'Request already processed' });
    
    const store = new Store({
      name: request.storeName,
      owner: request.user,
      email: request.storeEmail,
      phoneNumber: request.phoneNumber,
      description: request.description
    });
    
    await store.save();
    await User.findByIdAndUpdate(request.user, { role: 'storeOwner' });
    
    request.status = 'approved';  // ✅ Change from 'accepted' to 'approved'
    await request.save();
    
    res.status(200).json({ message: 'Request accepted', store });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
  }
};

export const rejectStoreRequest = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin access required' });

    const { id } = req.params;
    const request = await StoreRequest.findById(id);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    if (request.status !== 'pending') return res.status(400).json({ message: 'Request already processed' });

    request.status = 'rejected';
    await request.save();

    res.status(200).json({ message: 'Request rejected' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// store owner: get my store
export const getMyStore = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Authentication required' });
    if (req.user.role !== 'storeOwner') return res.status(403).json({ message: 'Store owner access required' });

    const store = await Store.findOne({ owner: req.user.id }).populate('items');
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
