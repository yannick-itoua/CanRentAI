const express = require('express');
const router = express.Router();
const { findBestOffer } = require('../controllers/matchController');

// Route to find the best offer
router.get('/', async (req, res) => {
  try {
    console.log("Received request to find best offer"); // Log the request
    const bestOffer = await findBestOffer();
    if (!bestOffer) {
        console.log("No best offer found"); // Log if no best offer is found
      return res.status(404).json({ message: "No listings found" });
    }
    res.json(bestOffer);
  } catch (error) {
    console.error("Error in route handler:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;