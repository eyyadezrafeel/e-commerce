import express from 'express';
import authM from '../middleware/authM.js';
import { createStoreRequest, listStoreRequests, acceptStoreRequest, rejectStoreRequest, getMyStore } from '../controllers/storeC.js';

const router = express.Router();

// User requests to become store owner
router.post('/userRequests', authM, createStoreRequest);

// Admin endpoints
router.get('/requests', authM, listStoreRequests);
router.patch('/requests/:id/accept', authM, acceptStoreRequest);
router.patch('/requests/:id/reject', authM, rejectStoreRequest);

// Store owner: get my store
router.get('/me', authM, getMyStore);

export default router;
