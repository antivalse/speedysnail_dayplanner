import prisma from "../prisma";
import { NewUser } from "@shared/user.types";
/**
 * Create a new user and store in database
 * @param data user data
 */

export const createUser = async (data: NewUser) => {
  try {
    // Perform any necessary validation on data before inserting into the database
    if (!data.username || !data.password) {
      throw new Error("Invalid data: Username and password are required");
    }

    return await prisma.user.create({
      data,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
