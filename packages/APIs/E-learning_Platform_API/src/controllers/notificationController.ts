import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Nodemailer Transport Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Send Notification to Course Owner for New Review
export const notifyCourseOwner = async ({
  courseTitle,
  creatorEmail,
  reviewContent,
  reviewRating,
}: {
  courseTitle: string;
  creatorEmail: string;
  reviewContent: string;
  reviewRating: number;
}) => {
  try {
    // Example: Send email notification to the course creator
    console.log(
      `Sending notification to ${creatorEmail} about new review on ${courseTitle}`
    );

    // Use Nodemailer (or any email service) to send the email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: creatorEmail,
      subject: `New review on your course: ${courseTitle}`,
      text: `A new review has been posted on your course "${courseTitle}".\n\nRating: ${reviewRating}\nReview: ${reviewContent}`,
    });

    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
