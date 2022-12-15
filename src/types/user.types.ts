export interface TUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface TUserWithoutPassword {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}
