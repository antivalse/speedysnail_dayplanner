/**
 * User Controller
 */

import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user_service";

/**
 * Register a New User
 */

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Failed to create a new user in database",
    });
  }
};

/**
 * Get all users
 */

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch users" });
  }
};
