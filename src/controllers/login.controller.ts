import { Request, Response } from 'express';
import loginService from '../services/login.service';

const validateLogin = async (req: Request, res: Response) => {
  const login = req.body;

  const token = await loginService.validateLogin(login);

  if (token === 'invalid login') {
    return res.status(401)
      .json({ message: 'Username or password invalid' });
  }

  res.status(200).json({ token });
};

export default validateLogin;
