import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Login } from '../types/login.type';

const validateLogin = async (body: Login) => {
  const { username, password } = body;

  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = (?) AND password = (?)', 
    [username, password],
  );

  if (!user) return 'invalid user';

  return { id: user.id, username };
};

export default {
  validateLogin,
};
