const express = require('express');
const cors = require('cors');
const config = require('config')

const app = express();
const PORT = config.get('server.port');

const routeControllers = require('./controllers/route.controller');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '500kb' }));
app.use(cors());

app.use('/routes', routeControllers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
