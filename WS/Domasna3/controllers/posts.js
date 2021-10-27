const Post = require('../models/post');

module.exports = {
  create: async (req, res) => {
    try {
      req.body.user = req.user.id;
      const post = await Post.create(req.body);

      res.status(201).send({
        error: false,
        message: `User with id #${ req.body.user } has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  
  returnAll: async (req, res) => {
    try {
      const posts = await Post.find().populate('user');
      res.send({
        error: false,
        message: `Return all`,
        post: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },
  returnOne: async (req, res) => {
    try {
      const posts = await Post.findById(req.params.id)
      res.send({
        error: false,
        message: `Return one`,
        post: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },
  getByUser: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.params.id })

      res.send({
        error: false,
        message: `All posts for user with id #${req.params.id}`,
        posts: posts
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },

  delete: async (req, res) => {
    try {
      await Post.findByIdAndDelete({ _id: req.params.id });
      res.send(`Post ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  },
   
}


