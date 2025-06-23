const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  startTime: String,
  endTime: String,
  topic: String,
  faculty: String,
  duration: Number,
  session: String
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
