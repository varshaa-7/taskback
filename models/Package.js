const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: String,
  image: String,
});

module.exports = mongoose.model('Package', packageSchema);
