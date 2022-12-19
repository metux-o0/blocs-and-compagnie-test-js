const fs = require('fs');

const dataFetcher = () => JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

module.exports = { dataFetcher };
