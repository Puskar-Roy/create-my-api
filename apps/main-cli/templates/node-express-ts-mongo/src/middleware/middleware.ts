import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import UserModel from '../models/userSchema';
import { TokenData } from '../interfaces/tokenInterface';

interface RequestWithUserId extends ExpressRequest {
  _id: string;
  iat: number;
  exp: number;
}
export const protect = async (
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided',
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as TokenData;
    const user = await UserModel.findById(decoded._id);
    req._id = user._id;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    });
  }
};
