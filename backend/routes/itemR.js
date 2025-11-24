import express from 'express';
import { createItem, getItems, getItemById } from '../controllers/itemC.js';
import authM from '../middleware/authM.js';

const router = express.Router();

// Public: list and get
router.get('/', getItems);
router.get('/:id', getItemById);

// Protected: create item (requires auth)
router.post('/create', authM, createItem);

export default router;

