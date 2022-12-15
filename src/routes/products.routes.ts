import { Router } from 'express';
import productsController from '../controllers/products.controller';
import nameValidation from '../middlewares/products/nameValidation.middleware';
import amountValidation from '../middlewares/products/amountValidation.middleware';

const router = Router();

router.get('/', productsController.getAllProducts);

router.post('/', nameValidation, amountValidation, productsController.createProducts);

export default router;
