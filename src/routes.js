const { Router } = require('express');
const routes = new Router();

const authMiddlewares = require('./App/middlewares/auth');

const usersController = require('./App/controllers/UsersController');
const sessionCOntroller = require('./App/controllers/SessionCOntroller');
const serviceEvaluationController = require('./App/controllers/ServiceEvaluationController')

routes.post('/users', usersController.store);
routes.post('/sessions', sessionCOntroller.store);

routes.use(authMiddlewares);

routes.get('/users', usersController.index);

routes.get('/evaluation', serviceEvaluationController.index);
routes.post('/evaluation', serviceEvaluationController.store);

module.exports = routes;