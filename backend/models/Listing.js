const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  formattedAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  homeType: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  livingArea: { type: Number, required: true },
  imgSrc: { type: String, required: true },
  detailUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);