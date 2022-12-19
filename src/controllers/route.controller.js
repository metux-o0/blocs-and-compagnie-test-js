const express = require('express')

const router = express.Router();

const routeService = require('../services/route.service')

function getRoutesFromFile(req, res, next) {
  try{
    res.json(routeService.getRoutesWithoutLocationPointsFromFile());
  }catch (err){
    next(err);
  }
}

function getRoutesFromPouchDb(req, res, next) {
  routeService.getRoutesWithoutLocationPointsFromPouchDb().then(routes => res.json(routes)).catch(err => next(err));
}

function getRouteById(req, res, next){
  routeService.getRouteWithoutLocationPointsById(req.params.routeId).then(route => res.json(route)).catch(err => next(err));
}

router.get('/fromFile', getRoutesFromFile);
router.get('/', getRoutesFromPouchDb);
router.get('/:routeId', getRouteById)

module.exports = router;
