const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");

// ROUTING MODULE LOADING (order important)
require("./models/User.js");
require("./models/Tweets.js");

const tweetsRouter = require("./routes/tweets");
const usersRouter = require("./routes/users");

// Connecting to Mlab database
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connected");
});

// expess setup

const app = express();
console.log('NODE_ENV:', process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
} else if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
  app.use(require("./middleware/dev-CORS.js"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/tweets", tweetsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

module.exports = app;
