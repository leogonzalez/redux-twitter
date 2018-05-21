var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Tweet = mongoose.model("tweet");

/* GET home page. */
router.get("/", function(req, res, next) {
  Tweet.find({})
    .then(tweets => {
      res.send(tweets);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

router.post("/new", (req, res, next) => {
  const { text, author } = req.body;

  const tweet = new Tweet({
    text: text,
    timestamp: new Date().getTime(),
    author
  });
  tweet
    .save()
    .then(doc => {
      req.app.io.emit("newTweet", doc);
      return doc;
    })
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(e => {
      console.log(e.message);
      res.status(400).send(e.message);
    });
});

module.exports = router;
