import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/userController.js';
import {
  createProfilePic,
  updateProfilePic,
} from '../controllers/profileController.js';
import { protect, protectAdmin } from '../middleware/middleware.js';
import fileUpload from '../util/fileUpload.js';

const router = express.Router();

router.get('/', protect, getAllUsers);
router.get('/:userId', protect, getUserById);
router.put('/:userId', protect, updateUserById);
router.post('/:userId/profile', protect, fileUpload, createProfilePic);
router.put('/:userId/profile', protect, fileUpload, updateProfilePic);
router.delete('/:userId', protectAdmin, deleteUserById);

export default router;
