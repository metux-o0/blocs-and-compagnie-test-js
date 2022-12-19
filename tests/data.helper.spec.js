const { expect } = require ('chai');
const dataHelper = require('../data/helper');


describe('Data helper tests', () => {
  it('pouchdb parser should properly set _id to reach route', () => {
    const routesWithId = dataHelper.dataParserForPouchDb();
    
    routesWithId.forEach(route => {
        expect(route).to.haveOwnProperty('_id');
    })
  });
});
