const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    flat_name: { type: String, required: true },
    flatType: { type: String, required: true  },
    block: { type: String, required: true  },
    No: { type: Number, required: true },
    imageUrl: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("flat", flatSchema);
