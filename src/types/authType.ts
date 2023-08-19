export interface Auth {
  username: string;
  password: string;
}

export interface AuthenticatedUser {
  userId: number;
  username: string;
  avatar: string;
  token: string;
}
