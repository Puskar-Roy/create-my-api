import { config } from 'dotenv';
import express from 'express';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors';
import router from './routes/index.js';
    
const __dirname = dirname(fileURLToPath(import.meta.url));


//Initialise dontenv
config()



const app=express()

app.use(cors())
app.use('/',router);

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})

export default app;