import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/orders/tokenValidation.middleware';
import productsIdsValidation from '../middlewares/orders/productsIdsValidation.middleware';

const router = Router();

router.get('/', ordersController.getAllOrders);

router.post('/', validateToken, productsIdsValidation, ordersController.addNewOrders);

export default router;
