import express from 'express';
import cors from 'cors';
import resourceRoutes from './routes/resource.routes.js';

const app = express();

app.use(
  cors({
    origin: '*', // Allow all origins
  })
);

app.use(express.json());

// import routes
app.use('/resource', resourceRoutes);

export default app;
