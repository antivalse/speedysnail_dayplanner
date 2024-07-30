/**
 * User types
 */

export interface User {
  id: number;
  username: string;
  password: string;
}

export type NewUser = Omit<User, "id">;
