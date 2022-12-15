import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidation from '../middlewares/login.middleware';

const router = Router();

router.post('/', loginValidation, loginController);

export default router;
