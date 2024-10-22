import {Router,Request,Response} from 'express';
import uploadRouter from './uploadRouter.js';

const router = Router();

router.use('/uploads',uploadRouter)

export default router;
