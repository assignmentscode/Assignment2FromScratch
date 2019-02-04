const axios = require('axios');

const httpGet = url => axios.get(url);
module.exports = httpGet;
