import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from '../controllers/BlogController';

const router = express.Router();

// CREATE a blog
router.post('/', createBlog);

// READ all blogs
router.get('/', getAllBlogs);

// READ a single blog by ID
router.get('/:id', getBlogById);

// UPDATE a blog by ID
router.put('/:id', updateBlogById);

// DELETE a blog by ID
router.delete('/:id', deleteBlogById);

export default router;
