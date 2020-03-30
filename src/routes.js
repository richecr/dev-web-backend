const { Router } = require('express');

const routes = new Router();

const authMiddlewares = require('./App/middlewares/auth');

const usersController = require('./App/controllers/UsersController');
const sessionController = require('./App/controllers/SessionController');
const serviceEvaluationController = require('./App/controllers/ServiceEvaluationController');

routes.post('/users', usersController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);

routes.get('/users', usersController.index);

routes.get('/evaluations', serviceEvaluationController.index);
routes.post('/evaluations', serviceEvaluationController.store);

module.exports = routes;
