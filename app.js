const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

// if (process.env.NODE_ENV === "production") {
  //1. make sure express serve production assets

  app.use(express.static("client/build"));

  //2. express will serve up index.html if does not recignize routes
  const path = require("path");

  //2.a. req* is the absolute catch all
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
// }

module.exports = app;
