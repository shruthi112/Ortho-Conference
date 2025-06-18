const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// GET all schedules by day
router.get('/:day', async (req, res) => {
  try {
    const schedules = await Schedule.find({ day: req.params.day });
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new schedule
router.post('/', async (req, res) => {
  try {
    const entry = new Schedule(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
