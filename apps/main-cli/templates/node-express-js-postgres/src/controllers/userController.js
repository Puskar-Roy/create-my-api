import asyncHandler from '../util/catchAsync.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const id = userId;
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      return res.status(200).status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
});
export const updateUserById = asyncHandler(
  async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    const id = userId;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: { name, email },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  }
);

export const deleteUserById = asyncHandler(
  async (req, res) => {
    const { userId } = req.params;
    const id = userId;
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: id },
      });
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
);
export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ error: 'Failed to get users' });
  }
});
