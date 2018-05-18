const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  User.find({})
    .then(users => {
      throwIfUserNotFound(users);
      res.send(users);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

router.get("/:_id", function(req, res, next) {
  const { _id } = req.params;
  User.findOne({ _id })
    .then(user => {
      console.log(user);
      throwIfUserNotFound(user);
      res.send(user);
    })
    .then(console.log)
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

//UPDATE USER INFO

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { tweets, avatarURL, name } = req.body;

  let updateObject = {};
  if (tweets) {
    updateObject = { $push: { tweets } };
  }

  if (avatarURL) {
    updateObject["avatarURL"] = avatarURL;
  }

  if (name) {
    updateObject["name"] = name;
  }

  User.findByIdAndUpdate(id, updateObject, { new: true })
    .then(updoc => {
      throwIfUserNotFound(updoc);
      res.send(updoc);
    })
    .catch(e => {
      res.send(e.message);
    });
});

function throwIfUserNotFound(user) {
  if (user === null) {
    throw new Error("User not found");
  }
}

module.exports = router;
