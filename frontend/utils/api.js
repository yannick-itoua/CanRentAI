import axios from 'axios';

// Axios instance configuration
const api = axios.create({
  baseURL: 'http://localhost:3000', // Change to your backend URL if needed
});


export const getProperties = async () => {
  const response = await api.get('/properties');
  return response.data;
};

export const getListing= async()=>{
    const response=await api.get(`/listings`);
    return response.data;
    }

export const createListing= async (listingData, token) => {
    const response = await api.post('/listings', listingData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

export const updateListing= async (id, listingData, token) => {
    const response = await api.put(`/listings/${id}`, listingData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

export const deleteListing= async (id, token) => {
    const response = await api.delete(`/listings/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

export const findMatches= async (minPrice, maxPrice) => {
    const response = await api.get(`/matches?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    return response.data;
};

export default api;