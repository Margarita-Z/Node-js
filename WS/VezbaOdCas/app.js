var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const categoryRouter = require('./routes/kategorii');
const commentRouter = require('./routes/comments');


var app = express();
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/ws')
//mongoose.connect(`mongodb+srv://company-admin:${process.env.MONGODB_PASSWORD}@cluster0.afnuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/category', categoryRouter);
app.use('/comment', commentRouter);
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({
        error: true,
        message: 'You need to log in to perform this action'
      })
    }
  });

module.exports = app;
