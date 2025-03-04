const axios = require('axios');
require('dotenv').config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_BASE_URL = 'https://real-time-zillow-data.p.rapidapi.com/search';

const getZillowData = async (location, homeStatus = 'FOR_SALE', sort = 'DEFAULT', listingType = 'BY_AGENT') => {
  try {
    const response = await axios.get(RAPIDAPI_BASE_URL, {
      params: {
        location: location,
        home_status: homeStatus,
        sort: sort,
        listing_type: listingType,
      },
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': 'real-time-zillow-data.p.rapidapi.com',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Zillow data:', error);
    throw error;
  }
};

module.exports = { getZillowData };