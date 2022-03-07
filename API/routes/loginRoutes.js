const express = require("express");

const router = express.Router();
const User = require("../models/userModel");

const loginUser = async (req, res) => {
  try {
    const userCheck = await User.findOne({ email: req.body.email });

    if (!userCheck)
      return res.status(400).json({
        status: "fail",
        message: "The user does not exist",
      });

    const user = await User.findOne(req.body);

    if (!user)
      return res.status(400).json({
        status: "fail",
        message: "Incorrect password!",
      });

    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

router.route("/").post(loginUser);

module.exports = router;
