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
  reviewingUser,
}: {
  courseTitle: string;
  creatorEmail: string;
  reviewContent: string;
  reviewRating: number;
  reviewingUser: string;
}) => {
  try {
    // Call sendMail function with dynamic data
    await sendMail({
      to: creatorEmail,
      subject: `New review on your course: ${courseTitle}`,
      templateName: 'review-notification', // Name of the EJS file without extension
      templateData: { courseTitle, reviewContent, reviewRating, reviewingUser }, // Data passed to the template
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

// Incase we create an in-website notification system, anyone contributing here, can refer to this!
/*
const updateNotification = async (req, res) => {
  const { id, userId, courseId, reviewId, type, message, read } = req.body;

  try {
      // Update the notification in the database
      const updatedNotification = await db.Notification.update({
          where: { id: id },
          data: {
              userId: userId,
              courseId: courseId,
              reviewId: reviewId,
              type: type,
              message: message,
              read: read,
              createdAt: new Date() // Optionally update createdAt if needed
          }
      });

      return res.status(200).json({ success: true, updatedNotification });
  } catch (error) {
      console.error("Error updating notification:", error);
      return res.status(500).json({ success: false, message: "Failed to update notification." });
  }
};
*/
