const express = require('express');
const router = express.Router();

const {findMatches} = require('../controllers/matchController');

router.get('/', async (req, res) => {
    try {
        const {minPrice, maxPrice} = req.query;
        const matches = await findMatches(minPrice, maxPrice);
        res.json(matches);
    } catch (error) {
        console.error("Error fetching matches:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;