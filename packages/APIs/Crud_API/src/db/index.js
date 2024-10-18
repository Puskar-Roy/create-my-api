import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}${DB_NAME}`
    );
    console.log(
      `Mongo db connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo db connection failed !!!`, error);
    process.exit(1);
  }
};
