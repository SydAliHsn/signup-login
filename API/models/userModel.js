const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required to create an account."],
    select: false,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is a required field!"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
