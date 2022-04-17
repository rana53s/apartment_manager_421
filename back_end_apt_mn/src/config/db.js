require("dotenv").config();

const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(process.env.mongo_URL);
  console.log("MongoDB Connected");
};
