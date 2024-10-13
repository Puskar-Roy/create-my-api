import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
import { notifyCourseOwner } from './notificationController';
const prisma = new PrismaClient();

export const addReview = asyncHandler(async (req: Request, res: Response) => {
  const { userId, courseId, rating, content } = req.body;

  try {
    // Create the review
    const review = await prisma.review.create({
      data: {
        userId,
        courseId,
        rating,
        content,
      },
    });

    console.log('Review created:', review);

    // Find the course to get the creator's ID
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Find the course creator
    const creator = await prisma.user.findUnique({
      where: { id: course.creatorId },
    });

    if (!creator) {
      return res.status(404).json({ message: 'Creator not found' });
    }

    console.log('Course creator:', creator);

    // Now call your notification logic here to notify the course creator
    await notifyCourseOwner({
      courseTitle: course.title,
      creatorEmail: creator.email,
      reviewContent: content,
      reviewRating: rating,
    });

    res.status(201).json(review);
  } catch (error) {
    console.error('Add review error:', error.message);
    res.status(500).json({ message: 'Unable to add review', success: false });
  }
});

export const updateReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { rating, content } = req.body;
    try {
      const review = await prisma.review.update({
        where: {
          id: id,
        },
        data: {
          rating,
          content,
        },
      });
      res.json(review);
    } catch (error) {
      console.error('Update review error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to update review', success: false });
    }
  }
);

export const deleteReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.review.delete({
        where: {
          id: id,
        },
      });
      res.status(204).end();
    } catch (error) {
      console.error('Delete review error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to delete review', success: false });
    }
  }
);

export const getAllReviewsForCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    try {
      const reviews = await prisma.review.findMany({
        where: {
          courseId: courseId,
        },
      });
      res.json(reviews);
    } catch (error) {
      console.error('Fetch reviews error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to fetch reviews', success: false });
    }
  }
);
