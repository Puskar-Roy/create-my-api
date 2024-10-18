import { Resource } from '../models/models.js';
import mongoose from 'mongoose';

export const createResource = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: 'Name and description are required.' });
    }

    const newResource = new Resource({ name, description });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResources = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const resources = await Resource.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const totalResources = await Resource.countDocuments();

    res.status(200).json({
      totalPages: Math.ceil(totalResources / limit),
      currentPage: page,
      resources,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid resource ID.' });
    }

    const resource = await Resource.findById(id);
    if (!resource)
      return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid resource ID.' });
    }

    if (!name && !description) {
      return res.status(400).json({
        message: 'At least one field (name or description) must be provided.',
      });
    }

    const updatedResource = await Resource.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    if (!updatedResource)
      return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid resource ID.' });
    }

    const deletedResource = await Resource.findByIdAndDelete(id);
    if (!deletedResource)
      return res.status(404).json({ message: 'Resource not found' });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
