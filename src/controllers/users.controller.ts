import { Request, Response } from 'express';
import usersService from '../services/users.service';

const userRegistration = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;

  const token = await usersService.userRegistration(user);

  res.status(201).json({ token });
};

export default {
  userRegistration,
};