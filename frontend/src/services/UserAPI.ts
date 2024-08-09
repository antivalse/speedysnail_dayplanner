/**
 * Interaction with user api
 *
 */

import { NewUser } from "@shared/user.types";
import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Create a new user
 */

export const registerUser = async (userData: NewUser) => {
  const res: AxiosResponse<NewUser> = await axios.post(
    `${API_URL}/register`,
    userData
  );
  return res.data;
};
