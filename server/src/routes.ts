import express from 'express';

import FlowerController from './controllers/FlowersController';

const routes = express.Router();

const flowerController = new FlowerController();

routes.get('/flowers', flowerController.index);
routes.get('/flowers/count', flowerController.count);
routes.get('/flowers/:id', flowerController.show);
routes.put('/flowers/:id', flowerController.update);
routes.post('/flowers', flowerController.create);
routes.delete('/flowers/:id', flowerController.delete);

export default routes;