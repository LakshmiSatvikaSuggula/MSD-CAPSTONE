const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  group: { type: String, required: true },  // name or ID of the group
  sender: { type: String, required: true }, // user email or name
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);
