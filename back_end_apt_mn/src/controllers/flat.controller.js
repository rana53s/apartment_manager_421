const express = require("express");

const Flat = require("../models/flat");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    return res.status(201).send(flat);
  } catch (err) {
    console.log("err: ", err);
  }
});

router.get("", async (req, res) => {
  try {
    const flats = await Flat.find().lean().exec();
    return res.status(200).send(flats);
  } catch (err) {
    console.log("err: ", err);
  }
});

module.exports = router;