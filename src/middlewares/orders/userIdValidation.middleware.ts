import jwt from 'jsonwebtoken';
import { Token } from '../../types/token';

const secret = process.env.JWT_SECRET as string;

const userIdValidation = (authorization: string): Token => {
  const decodedToken = jwt.verify(authorization, secret);

  return decodedToken as Token;
};

export default userIdValidation;
