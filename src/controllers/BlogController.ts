import { Request, Response, RequestHandler } from 'express';
import Blog, { IBlog } from '../models/BlogModel';

// CREATE a blog
export const createBlog: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { title, content, author } = req.body;

  try {
    const newBlog: IBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating blog', error });
  }
};

// READ all blogs
export const getAllBlogs: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// READ a single blog by ID
export const getBlogById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

// UPDATE a blog by ID
export const updateBlogById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true } // Return the updated document
    );

    if (!updatedBlog) res.status(404).json({ message: 'Blog not found' });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating blog', error });
  }
};

// DELETE a blog by ID
export const deleteBlogById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog)  res.status(404).json({ message: 'Blog not found' });
     res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
     res.status(500).json({ message: 'Error deleting blog', error });
  }
};
