import { Router } from "express";
import compilerRouter from "./complierRouter.js";
const mainRouter=Router()

mainRouter.use('/complier',compilerRouter)

export default mainRouter;