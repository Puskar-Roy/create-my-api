import mongoose from 'mongoose';
import config from '../config/config';

mongoose
  .connect(config.MONGOURI)
  .then(() => {
    console.log(`[📥] MongoDB Connected!`);
  })
  .catch((error) => {
    console.log(`Connection Error - ${error}`);
  });
