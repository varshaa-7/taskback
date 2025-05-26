const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model('Destination', destinationSchema);
