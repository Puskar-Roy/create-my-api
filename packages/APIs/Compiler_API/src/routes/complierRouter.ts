import { Router } from "express";
import {compilerController} from "../controllers/index.js";

const compilerRouter=Router()

compilerRouter.post('/compile',compilerController.compile)

compilerRouter.get('/get',(req,res)=>{
    res.status(200).json("working fine")
})

export default compilerRouter;