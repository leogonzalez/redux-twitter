const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const tweetsSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: ObjectId,
  timestamp: Date,
  likes: {
    type: [ObjectId],
    default: []
  },
  replies: {
    type: [ObjectId],
    default: []
  },
  replyingTo: {
    type: ObjectId,
    default: null
  }
});

mongoose.model("tweet", tweetsSchema);
