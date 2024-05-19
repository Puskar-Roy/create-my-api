import express, { Router } from 'express';
import { getAllUsers, getUser } from '../controllers/userController';
import { protect } from '../middleware/middleware';

const router: Router = express.Router();

router.use(protect);
router.get('/:id', getUser);
router.get('/', getAllUsers);

export default router;
