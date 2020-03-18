const { Router } = require('express');
const routes = new Router();

const authMiddlewares = require('./App/middlewares/auth');

const usersController = require('./App/controllers/UsersController');
const sessionCOntroller = require('./App/controllers/SessionCOntroller');

routes.post('/users', usersController.store);
routes.post('/sessions', sessionCOntroller.store);

routes.use(authMiddlewares);

routes.get('/users', usersController.index);

module.exports = routes;