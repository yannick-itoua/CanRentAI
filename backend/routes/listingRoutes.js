const express = require('express');
const router = express.Router();
const {
  getListing,
  addListing,
  updateListing,
  deleteListing
} = require('../controllers/listingController');

// Route to get all listings
router.get('/', getListing);

// Route to add a new listing
router.post('/', addListing);

// Route to update a listing by ID
router.put('/:id', updateListing);

// Route to delete a listing by ID
router.delete('/:id', deleteListing);

module.exports = router;