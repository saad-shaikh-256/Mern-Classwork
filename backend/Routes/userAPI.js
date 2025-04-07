require("dotenv").config();

const express = require("express");
const route = express.Router();
const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwtUtils");
const authMiddleware = require("../utils/authMiddleware");

router.get(
  "/get-user",
  authMiddleware.authenticateToken,
  async (req, res, next) => {
    try {
      const user = await User.findById();
      res
        .status(200)
        .json({ message: "User fetched successfully", data: user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

route.post("/login", async (req, res) => {
  try {
    const { user_email, password } = req.body;

    const user = await User.findOne({ user_email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate token with the correct variable 'user'
    const token = await generateToken(user);

    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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

// Search User
route.get("/searchUser/:key", async (req, res) => {
  const key = req.params.key;
  try {
    let data = await User.find({
      $or: [
        {
          user_name: { $regex: key },
        },
      ],
    });
    res.status(200).json({ success: "User found", data: data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Search User
route.get("/searchUser/:name", async (req, res) => {
  const name = req.params.name;
  try {
    let data = await User.find({
      $or: [
        {
          user_name: { $regex: name },
        },
      ],
    });
    res.status(200).json({ success: "User found", data: data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// route.get("/viewOrders", async (req, res) => {
//   try {
//     const orderData = Order.aggregate([
//       {
//         $lookup: {
//           from: "users",
//           localField: "user_id",
//           foreignField: "_id",
//           as: "users",
//         },
//       },
//       { $unwind: "users" },
//     ]);
//     res.status(200).json({ success: "Order Succesfull", data: data });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

module.exports = route;
