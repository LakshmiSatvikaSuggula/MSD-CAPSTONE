// models/Message.js
const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
  question: String,
  options: [String],
  votes: { type: Map, of: Number, default: {} },
  voters: [String],
  votersByOption: { type: Map, of: [String], default: {} }
});

const MessageSchema = new mongoose.Schema({
  user: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "sent" },
  fileUrl: String,
  fileType: String,
  fileName: String,
  poll: PollSchema,
  replyTo: String,
  edited: { type: Boolean, default: false },
  pinned: { type: Boolean, default: false },
  starred: { type: Boolean, default: false }
});

module.exports = mongoose.model("Message", MessageSchema);
