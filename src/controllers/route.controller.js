const express = require('express')

const router = express.Router();

const routeService = require('../services/route.service')

function getRoutes(req, res, _next) {
  res.send(routeService.getRoutesWithoutLocationPoints());
}

router.get('/', getRoutes);

module.exports = router;
