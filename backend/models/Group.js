const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  founder: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, enum: ["public", "private"], default: "private" }
});

module.exports = mongoose.model("Group", groupSchema);
