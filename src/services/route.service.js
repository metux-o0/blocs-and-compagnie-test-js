const service = {}

const { dataFetcherFromFile, dataFetcherFromPouchDb, dataFetcherFromPouchDbById } = require('../../data/helper');
const { route } = require('../controllers/route.controller');

service.getRoutesWithoutLocationPointsFromFile = () => {
    const { routes } = dataFetcherFromFile();
    routes.map(route => {
        delete route.locations;
    })

    return routes;
};

service.getRoutesWithoutLocationPointsFromPouchDb = async () => {
    return dataFetcherFromPouchDb();   
};


service.getRouteWithoutLocationPointsById = async (routeId) => {
    return dataFetcherFromPouchDbById(routeId);
};

module.exports = service;