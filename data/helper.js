const fs = require('fs');
const PouchDB = require('pouchdb');

const pouchdb = new PouchDB('geo-routes');

const dataFetcherFromFile = () => JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const dataFetcherFromPouchDb = async ({ withoutLocations = true } = true) => {
    const docs = await pouchdb.allDocs({include_docs:true}, function(err, doc){

        if (withoutLocations){
            doc.rows.map(route => {
                delete route.doc.locations;
            });
        }
        return doc
    })
    return docs;
}

const dataParserForPouchDb = () => {
    const { routes } = dataFetcherFromFile();

    routes.map((route) => {
        route._id = route.id;
    })
    return routes;
}

const dataFetcherFromPouchDbById = async (documentId) => {
    const data = await pouchdb.get(documentId).then(function (doc){
        return doc;
    }).catch(function(err) { 
        console.log(err)
    });

    return data;
}


module.exports = { dataFetcherFromFile, dataFetcherFromPouchDb, dataParserForPouchDb, dataFetcherFromPouchDbById};
