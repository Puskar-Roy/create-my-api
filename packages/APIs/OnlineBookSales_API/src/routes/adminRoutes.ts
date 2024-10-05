import express from 'express';
import { authorizeRoles,isAuthenticatedUser } from '../middlewares/auth.js';
const router=express.Router();
import { retriveFeedbacks, retriveFeedbacksById, updateFeeback } from '../controllers/adminController.js';





router.get('/feedback',isAuthenticatedUser,authorizeRoles('admin'),retriveFeedbacks);


router.get('/feedback/:id',isAuthenticatedUser,authorizeRoles('admin'),retriveFeedbacksById);

router.post('/feedback/update/:id',isAuthenticatedUser,authorizeRoles('admin'),updateFeeback);



export default router;
