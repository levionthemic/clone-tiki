const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
    token: String,
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
