const fs = require('fs');

const dataFetcher = () => JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const dataParserForPouchDb = () => {
    const { routes } = dataFetcher();

    routes.map((route,index) => {
        route._id = index.toString();
    })
    return routes;
}

module.exports = { dataFetcher, dataParserForPouchDb};
