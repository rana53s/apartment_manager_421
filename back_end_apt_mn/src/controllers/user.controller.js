const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    console.log("err: ", err);
  }
});

router.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send(users);
    } catch (err) {
      console.log("err: ", err);
    }
  });
