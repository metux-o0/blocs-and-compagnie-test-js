const service = {}

const { dataFetcher } = require('../../data/helper')

service.getRoutesWithoutLocationPoints = () => {
    const { routes } = dataFetcher();
    routes.map(route => {
        delete route.locations;
    })

    return routes;
}

module.exports = service;