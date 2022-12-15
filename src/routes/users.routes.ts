import { Router } from 'express';
import usersController from '../controllers/users.controller';
import usernameValidation from '../middlewares/users/usernameValidation.middleware';
import vocationValidation from '../middlewares/users/vocationValidation.middleware';
import levelValidation from '../middlewares/users/levelValidation.middleware';
import passwordValidation from '../middlewares/users/passwordValidation.middleware';

const router = Router();

router.post(
  '/',
  usernameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
  usersController.userRegistration,
);

export default router;
