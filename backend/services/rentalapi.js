const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.RENTCAST_API_KEY;
const BASE_URL = 'https://api.rentcast.io/v1/properties';

const getRentalOffers = async (city, state, limit = 20) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        city: city,
        state: state,
        limit: limit,
      },
      headers: {
        'Accept': 'application/json',
        'X-Api-Key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching rental offers:', error);
    throw error;
  }
};

const getAllRentalOffers = async () => {
  try {
    const apartmentOffers = await getRentalOffers('Austin', 'TX');
    const houseOffers = await getRentalOffers('Toronto', 'ON');
    const roomOffers = await getRentalOffers('Los Angeles', 'CA');

    return {
      apartments: apartmentOffers,
      houses: houseOffers,
      rooms: roomOffers,
    };
  } catch (error) {
    console.error('Error fetching all rental offers:', error);
    throw error;
  }
};

module.exports = { getAllRentalOffers };