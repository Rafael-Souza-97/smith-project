import loginModel from '../models/login.model';
import token from '../auth/token';
import { Login } from '../types/login.type';

const validateLogin = async (login: Login): Promise<string> => {
  const user = await loginModel.validateLogin(login);
  
  if (user === 'invalid user') return 'invalid login';

  const tokenResponse = token.createToken(user);

  return tokenResponse;
};

export default {
  validateLogin,
};
