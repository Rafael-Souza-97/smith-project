import { Router } from 'express';
import productsController from '../controllers/products.controller';
import nameValidation from '../middlewares/nameValidation.middleware';
import amountValidation from '../middlewares/amountValidation.middleware';

const router = Router();

router.get('/', productsController.getAllProducts);

router.post('/', nameValidation, amountValidation, productsController.createProducts);

export default router;
