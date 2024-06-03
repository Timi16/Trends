const Comment = require('../models/User');

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { user, content } = req.body;
    const comment = new Comment({ user, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  createComment,
  getAllComments,
};
