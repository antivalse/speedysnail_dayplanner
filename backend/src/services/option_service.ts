import prisma from "prisma";
import { Option, NewOption } from "@shared/option.types";

/**
 * Create a new option and store in database
 * @param data option data
 */

export const createOption = async (data: NewOption) => {
  try {
    if (!data.title) {
      throw new Error("invalid data: title is required");
    }

    return await prisma.option.create({
      data,
    });
  } catch (error) {
    console.error("Error creating option:", error);
    throw error;
  }
};

/**
 * Get All Options from Database
 */

export const getOptions = async () => {
  return await prisma.option.findMany();
};

/**
 * Get a Single Option
 * @param optionId The ID of Option to Get
 */

export const getOption = async (optionId: number) => {
  return await prisma.option.findUniqueOrThrow({
    where: {
      id: optionId,
    },
  });
};
