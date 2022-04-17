const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    flatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'flat',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("user", userSchema);
