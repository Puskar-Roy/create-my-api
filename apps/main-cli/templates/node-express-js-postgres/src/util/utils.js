import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import { randomInt } from 'crypto';


export const createToken = (_id) => {
  return jwt.sign({ _id: _id }, config.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const generateOTP = () => {
  const otp = randomInt(100000, 1000000);
  return otp.toString();
};
