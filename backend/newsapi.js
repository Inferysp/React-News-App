const superagent = require('superagent');

const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const EVERYTHING_ENDPOINT_PATH = "/everything";
const API_KEY = '';

const getMainArticles = (query) => superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({ country: 'pl', ...query, apiKey: API_KEY, pageSize: 6});

const getNasaNews = (query) => superagent
.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
.query({...query, apiKey: API_KEY, q: 'Nasa' });


module.exports = {
    getMainArticles,
    getNasaNews,
};