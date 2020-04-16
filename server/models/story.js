const mongoose = require('mongoose');
const db = require('../db');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  photos: [String],
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
