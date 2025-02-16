const mongoose = require('mongoose');
const Match = require("../models/Match");

// Function to find matches based on price range
const findMatches = async (minPrice, maxPrice) => {
    try {
        const matches = await Match.find({
            price: { $gte: minPrice, $lte: maxPrice }
        });
        return matches;
    } catch (error) {
        console.error("Error finding matches:", error);
        throw error;
    }
};


module.exports = { findMatches };