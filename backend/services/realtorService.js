require('dotenv').config();
const axios = require('axios');

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN;
const APIFY_ACTOR_ID = 'sorower/zillow-working-scraper'; // Actor officiel Zillow

async function scrapeZillow() {
  const input = {
    search: 'Toronto, ON',
    maxResults: 10,
    includeDetails: true
  };

  // Lancer le scraping
  const runResponse = await axios.post(
    `https://api.apify.com/v2/actor-runs/${APIFY_ACTOR_ID}`,
    { input },
    {
      headers: { Authorization: `Bearer ${APIFY_API_TOKEN}` }
    }
  );
  
  const { id } = runResponse.data.data;

  // Attendre que le scraper termine
  let result;
  while (true) {
    const statusResponse = await axios.get(
      `https://api.apify.com/v2/actor-runs/${id}`,
      { headers: { Authorization: `Bearer ${APIFY_API_TOKEN}` } }
    );
    if (statusResponse.data.data.status === 'SUCCEEDED') {
      result = statusResponse.data.data;
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 5000)); // Pause 5s
  }

  // Récupérer les résultats
  const datasetResponse = await axios.get(
    `https://api.apify.com/v2/datasets/${result.defaultDatasetId}/items`,
    { headers: { Authorization: `Bearer ${APIFY_API_TOKEN}` } }
  );

  console.log('📊 Résultats:', datasetResponse.data);
  return datasetResponse.data;
}

scrapeZillow().catch(console.error);
