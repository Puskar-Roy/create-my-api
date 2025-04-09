import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/config.js';
import CheckError from './util/checkError.js';
import errorHandler from './middleware/errorMiddleware.js';
import express from 'express';

const app = express();

const whitelist = ['backendurl'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(config.DEV_ENV === 'PROD' ? cors(corsOptions) : cors());
app.set('trust proxy', config.DEV_ENV === 'PROD');

app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(hpp());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

app.use('/api/v0.1/auth', authRoutes);
app.use('/api/v0.1/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API IS WORKING 🥳' })
});

app.all('*', (req, res, next) => {
  next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`);
});

export default app;
