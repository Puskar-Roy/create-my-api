import config from '../config/config.js';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { generateOTP } from './utils.js';

export const sendOTPwithNodemailer = async (userId) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo', // change the service for other smtp server
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const token = generateOTP();
    await prisma.verificationToken.create({
      data: {
        token: token,
        userId: user.id,
      },
    });
    const mailOptions = {
      from: config.EMAIL,
      to: user.email,
      subject: 'Reset Password OTP',
      html: ` <h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋,Verify Your OTP For Reset Your Password, This Is Your OTP - ${token}</h2>

  <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
  <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
