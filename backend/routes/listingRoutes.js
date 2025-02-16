const express = require('express');
const router = express.Router();
const {
  getListing,
  addListing,
  updateListing,
  deleteListing
} = require('../controllers/listingController');

router.route('/').get(getListing).post(addListing);
router.route('/:id').put(updateListing).delete(deleteListing);

module.exports = router;