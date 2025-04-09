import config from '../config/config.js';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const sendEmailwithNodemailer = async (userId) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    }
  });

  try {

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      console.error('[❌] User not found!');
      return;
    }

    const token = uuidv4();

    await prisma.verificationToken.create({
      data: {
        token,
        userId: user.id,
      },
    });

    const verificationLink = `${config.BACKEND_URL}/api/v0.1/auth/verify-email/${user.id}/?token=${token}`;
    

    const mailOptions = {
      from: config.EMAIL,
      to: user.email,
      subject: 'Verify Your Email',
      html: `
        <h2>Hey ${user.name},</h2>
        <p>Click the link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>
      `,
    };

    
    const result = await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error('[🔥 Error Sending Email]', error);
    if (error.responseCode) {
      console.error('📡 SMTP Response Code:', error.responseCode);
    }
    if (error.response) {
      console.error('📬 SMTP Response:', error.response);
    }
  }
};

