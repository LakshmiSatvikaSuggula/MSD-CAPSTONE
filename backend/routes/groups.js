const express = require("express");
const router = express.Router();
const Group = require("../models/Group");

// Get all groups by category
router.get("/", async (req, res) => {
  const groups = await Group.find();
  const categorized = {};
  groups.forEach((g) => {
    if (!categorized[g.category]) categorized[g.category] = [];
    categorized[g.category].push(g);
  });
  res.json(categorized);
});

// Create group
router.post("/", async (req, res) => {
  const { name, founder, type, category = "General" } = req.body;
  const newGroup = new Group({ name, founder, type, category });
  await newGroup.save();
  res.status(201).json(newGroup);
});

module.exports = router;
