const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

/* POST NEW USERS */

router.post("/new", (req, res, next) => {
  const { name, avatarURL } = req.body;

  const user = new User({ name, avatarURL });

  user
    .save()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

module.exports = router;
