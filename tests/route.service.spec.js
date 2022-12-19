const { expect } = require ('chai');
const RouteService = require('../src/services/route.service');

describe('Route Service tests', () => {
  it('should return a json with routes as a nested property but without locations points', () => {
    const routesWithoutLocationPoints = RouteService.getRoutesWithoutLocationPoints();    
    console.log(routesWithoutLocationPoints)
    routesWithoutLocationPoints.forEach(route => {
        console.log(route)
        expect(route).to.not.haveOwnProperty('locations');
    })
  });
});
