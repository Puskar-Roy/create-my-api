import express from 'express';
import mainRouter from './routes/mainRouter.js';

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT:string|number=process.env.PORT||3000

app.use('/api/v1',mainRouter);

app.listen(PORT,()=>{
  console.log(`server start at PORT ${PORT}`)
})

export default app;