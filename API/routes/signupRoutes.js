const express = require("express");

const User = require("../models/userModel");

const router = express.Router();

const signupUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      throw new Error(
        "A user with this email already exists! Try signing in instead."
      );
    }

    user = await User.create(req.body);

    res.status(201).json({ status: "success", data: { user } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

router.route("/").post(signupUser);

module.exports = router;
