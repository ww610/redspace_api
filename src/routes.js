const routes = require('express').Router();
const PlanetController = require('./app/controllers/PlanetController');

routes.get('/planets/getById/:id', PlanetController.getPlanetById);

module.exports = routes;