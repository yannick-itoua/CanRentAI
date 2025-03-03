const Match = require("../models/Match");
const Listing = require("../models/Listing");


// Function to get all listings and find the best offer
const findBestOffer = async () => {
  try {
    const listings = await Listing.find();
    console.log("Listings found:", listings); // Log the listings found
    if (listings.length === 0) {
      return null; // Return null if no listings are found
    }
    // Assuming the best offer is the listing with the lowest price
    const bestOffer = listings.reduce((prev, curr) => (prev.price < curr.price ? prev : curr), listings[0]);
    console.log("Best offer found:", bestOffer); // Log the best offer found
    return bestOffer;
  } catch (error) {
    console.error("Error finding best offer:", error);
    throw error;
  }
};

module.exports = { findBestOffer };