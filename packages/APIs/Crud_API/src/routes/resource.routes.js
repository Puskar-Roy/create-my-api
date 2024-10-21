import express from 'express';
import {
  createResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource,
} from '../controllers/resource.controllers.js';

const router = express.Router();

router.post('/', createResource); // Create a new resource
router.get('/', getResources); // Get all resources
router.get('/:id', getResourceById); // Get a resource by ID
router.put('/:id', updateResource); // Update a resource by ID
router.delete('/:id', deleteResource); // Delete a resource by ID

export default router;
