import {Router,Request,Response} from 'express';
import upload from '../constants.js';
import uploadController from '../controllers/uploadController.js';

const uploadRouter = Router();

uploadRouter.post('/',upload.single('genURL'),uploadController.Upload);

uploadRouter.get('/:id',uploadController.getUpload)

export default uploadRouter;
