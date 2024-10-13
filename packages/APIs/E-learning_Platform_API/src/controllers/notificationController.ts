import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Nodemailer Transport Configuration
import { sendMail } from '../util/sendMail';
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
    // Call the reusable sendMail function with dynamic data
    await sendMail({
      to: creatorEmail,
      subject: `New review on your course: ${courseTitle}`,
      templateName: 'review-notification', // Name of the EJS file without extension
      templateData: { courseTitle, reviewContent, reviewRating }, // Data passed to the template
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
