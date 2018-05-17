// mongoose steps:
// 1. Define Schemas
// 2. Register schema as model
// 3. invoke Class(model) to produce new instances
// 4. Save instances

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatarURL: {
    type: String
  },
  tweets:{
    type: [String],
    default: []
  }
});

mongoose.model("user", userSchema);
