const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numOfActions: { type: Number, default: 10 },
});

const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
