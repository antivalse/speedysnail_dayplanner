/**
 * Interaction with user api
 *
 */

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Create a new user
 */

export const registerUser = (userData: {
  username: string;
  password: string;
}) => {
  return axios.post(`${API_URL}/register`, userData);
};
