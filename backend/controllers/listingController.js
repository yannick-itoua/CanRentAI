const mongoose = require("mongoose");
const Listing = require("../models/Listing");

// @desc Get all listings
const getListing = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query.formattedAddress = { $regex: new RegExp(`^${search}`, "i") };
    }

    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addListing = async (req, res) => {
  try {
    const { formattedAddress, city, state, zipCode, propertyType, price, bedrooms, bathrooms } = req.body;
    const listing = await Listing.create({ formattedAddress, city, state, zipCode, propertyType, price, bedrooms, bathrooms });
    res.status(201).json(listing);
  } catch (error) {
    console.error("Error adding listing:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    Object.assign(listing, req.body);
    const updatedListing = await listing.save();
    res.json(updatedListing);
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid Listing ID:", id);
      return res.status(400).json({ message: "Invalid listing ID" });
    }

    const listing = await Listing.findById(id);
    if (!listing) {
      console.error("Listing not found:", id);
      return res.status(404).json({ message: "Listing not found" });
    }

    await Listing.deleteOne({ _id: id });

    console.log("Listing deleted successfully:", id);
    res.json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error("Error deleting listing:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getListing, addListing, updateListing, deleteListing };