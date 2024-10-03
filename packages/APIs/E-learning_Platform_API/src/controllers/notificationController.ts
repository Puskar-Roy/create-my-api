import { PrismaClient } from '@prisma/client';
import { sendEmail, sendEmailwithNodemailer } from '../util/sendEmail';
const prisma = new PrismaClient();
import config from '../config/config';
// Create a notification when a new Review is posted
export const notifyCourseOwner = async (courseId: number, reviewId: number) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { user: true }, // Fetch the course owner
  });

  if (!course) throw new Error('Course not found');

  // Create a new notification
  await prisma.notification.create({
    data: {
      userId: course.user.id, // The course owner's ID
      courseId: course.id,
      reviewId: reviewId,
      type: 'new_review',
      message: `You have a new review on ${course.title}`,
    },
  });

  // Send an email notification
  config.EMAIL_SERVICE === 'RESEND'
    ? await sendEmail(user.id)
    : await sendEmailwithNodemailer(user.id);

  course.user.email,
    'New Review Posted',
    `You have a new review on ${course.title}. Check it out!`;
};

// Similarly, you can create another function for notifying the review owner when the course owner replies.
