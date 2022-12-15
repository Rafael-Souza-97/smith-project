import jwt from 'jsonwebtoken';
import { TUserWithoutPassword } from '../types/user.types';

const secret = process.env.JWT_SECRET as string;

const createToken = async (user: TUserWithoutPassword) => {
  const token = jwt.sign(user, secret, { expiresIn: '1d', algorithm: 'HS256' });

  return token;
};

export default {
  createToken,
};