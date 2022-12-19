const express = require('express');
const cors = require('cors');
const config = require('config');
const PouchDB = require('pouchdb');

const app = express();
const PORT = config.get('server.port');

const pouchdb = new PouchDB('geo-routes');
const { dataParserForPouchDb } = require('../data/helper');

const routeControllers = require('./controllers/route.controller');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '500kb' }));
app.use(cors());

app.use('/routes', routeControllers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  pouchdb.info().then(info => console.log(info));
  pouchdb.bulkDocs(dataParserForPouchDb());
});

module.exports = { pouchdb };
