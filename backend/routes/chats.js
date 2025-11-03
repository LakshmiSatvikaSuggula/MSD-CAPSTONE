// routes/chat.js
const express = require("express");
const router = express.Router();
const Group = require("../models/Group");
const Message = require("../models/Message");

// 1️⃣ Create a new group
router.post("/groups", async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    await newGroup.save();
    res.status(201).json({ message: "Group created!", data: newGroup });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2️⃣ Send a chat message
router.post("/messages", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved!", data: newMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3️⃣ Fetch messages for a group
router.get("/messages/:group", async (req, res) => {
  try {
    const messages = await Message.find({ group: req.params.group });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
