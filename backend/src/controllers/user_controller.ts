/**
 * User Controller
 */

import { Request, Response } from "express";
import { createUser } from "../services/user_service";

/**
 * Register a new user
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
