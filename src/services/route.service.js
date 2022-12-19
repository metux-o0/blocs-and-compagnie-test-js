const geoUtils = require('geolocation-utils');
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

service.getRoutesWithTotalDistanceTraveled = async () => {
    const { rows } = await dataFetcherFromPouchDb({ withoutLocations: false });

    const data = rows.map(row => row.doc)
    data.forEach(route => {
        let totalDistance = 0;
        route.locations.forEach((location, index) => {
            if (index +1 < route.locations.length) {
                const actualLocationCoords = { lat: location.coords.latitude, lon: location.coords.longitude };
                const nextLocationCoords = { lat: route.locations[index+1].coords.latitude, lon: route.locations[index+1].coords.longitude };
                totalDistance += (geoUtils.headingDistanceTo(actualLocationCoords, nextLocationCoords)).distance
            }
        })
        route.totalDistance = totalDistance;
    })
    return data;
};

module.exports = service;