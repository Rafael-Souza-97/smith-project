import { ResultSetHeader } from 'mysql2';
import { TUser, TUserWithoutPassword } from '../types/user.types';
import connection from './connection';

const userRegistration = async (user: TUser): Promise<TUserWithoutPassword> => {
  const { username, password, level, vocation } = user;

  const [result] = await connection
    .execute<ResultSetHeader>(`INSERT INTO Trybesmith.users (username, password, level, vocation) 
    VALUES (?,?,?,?)`, [username, password, level, vocation]);

  const userResult = { id: result.insertId, username, level, vocation };

  return userResult;
};

export default {
  userRegistration,
};
