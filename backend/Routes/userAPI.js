require("dotenv").config();

const express = require("express");
const route = express.Router();
const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");

// to save the data in the database
route.post("/addUser", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 1);

    const exitsEmail = await User.findOne({ user_email: req.body.user_email });
    if (exitsEmail) {
      return res.status(200).json({ error: "Email already exists" });
    }

    const newuser = new User({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_dob: req.body.user_dob,
      gender: req.body.gender,
      password: hashedPassword,
    });
    const saveUser = await newuser.save();
    res.status(200).json({ message: "Success", data: saveUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//to list all the users from the database
route.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ success: "All users from the database", data: users });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//to get only 1 user
route.get("/singleUser/:userID", async (req, res) => {
  try {
    const userId = req.params.userID;
    const user = await User.findById(userId);
    res.status(200).json({ success: "One user from db", data: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//to delete only 1 user
route.get("/deleteUser/:userID", async (req, res) => {
  try {
    const userId = req.params.userID;
    const user = await User.findById(userId);
    res.status(200).json({ success: "One user from db", data: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// update User
route.put("/updateUser/:userID", async (req, res) => {
  try {
    const uid = req.params.userID;
    const user = await user.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    res.json(user);
    res.status(200).json({ success: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = route;
