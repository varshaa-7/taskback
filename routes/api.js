const express = require('express');
const Destination = require('../models/Destination');
const Package = require('../models/Package');
const router = express.Router();

// GET popular destinations
router.get('/destinations', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET top-selling packages
router.get('/packages/top-selling', async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
