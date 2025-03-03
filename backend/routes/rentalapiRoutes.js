const express = require('express');
const { getAllRentalOffers } = require('../services/rentalapi');

const router = express.Router();

router.get('/rental-offers', async (req, res) => {
  try {
    const rentalOffers = await getAllRentalOffers();
    res.status(200).json(rentalOffers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rental offers' });
  }
});

module.exports = router;