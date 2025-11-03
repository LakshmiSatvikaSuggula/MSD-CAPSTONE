const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// GET messages for a specific group
router.get('/:group', async (req, res) => {
  try {
    const chats = await Chat.find({ group: req.params.group }).sort({ createdAt: 1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new message for a group
router.post('/', async (req, res) => {
  try {
    const { group, sender, message } = req.body;
    const chat = new Chat({ group, sender, message });
    await chat.save();
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
