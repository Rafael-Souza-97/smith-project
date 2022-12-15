import usersModel from '../models/users.model';
import token from '../auth/token';
import { TUser, TUserWithoutPassword } from '../types/user.types';

const userRegistration = async (user: TUser):Promise<string> => {
  const registeredUser: TUserWithoutPassword = await usersModel.userRegistration(user);

  const tokenResponse = token.createToken(registeredUser);

  return tokenResponse;
};

export default {
  userRegistration,
};
