const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    flat_name: { type: String, required: true },
    flatType: { type: String, enum: ["Owner", "Tenant"] },
    block: { type: String, enum: ["A", "B", "C", "D"] },
    No: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("flat", flatSchema);
