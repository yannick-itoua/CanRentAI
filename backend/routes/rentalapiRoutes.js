const express = require('express');
const { getZillowData } = require('../services/rentalapi');

const router = express.Router();

router.get('/zillow-data', async (req, res) => {
  try {
    const { location, homeStatus, sort, listingType } = req.query;
    const zillowData = await getZillowData(location, homeStatus, sort, listingType);
    res.status(200).json(zillowData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Zillow data' });
  }
});

module.exports = router;