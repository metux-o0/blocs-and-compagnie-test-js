const { expect } = require ('chai');
const RouteService = require('../src/services/route.service');


describe('Route Service tests', () => {
  it('should return a json with routes as a nested property but without locations points from File', () => {
    const routesWithoutLocationPoints = RouteService.getRoutesWithoutLocationPointsFromFile();    

    routesWithoutLocationPoints.forEach(route => expect(route).to.not.haveOwnProperty('locations'));
  });

  it('should return a json with routes as a nested property but without locations points from PouchDb', () => {
    const routesWithoutLocationPoints = RouteService.getRoutesWithoutLocationPointsFromFile();    

    routesWithoutLocationPoints.forEach(route => expect(route).to.not.haveOwnProperty('locations'));
  });  
});
