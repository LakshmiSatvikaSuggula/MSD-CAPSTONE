const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  user: { type: String, required: true },
  text: { type: String },
  fileUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", chatSchema);
