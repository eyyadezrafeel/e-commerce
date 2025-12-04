import express from 'express';
import { createItem, getItems, getItemById } from '../controllers/itemC.js';
import authM from '../middleware/authM.js';
import { upload } from '../config/multer.js';

const router = express.Router();

// Public: list and get
router.get('/', getItems);
router.get('/:id', getItemById);

// Protected: create item (requires auth)
router.post('/create', authM,upload.array("images",10), createItem);

export default router;

