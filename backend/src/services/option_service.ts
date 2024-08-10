import prisma from "../prisma";
import { NewOption, Option } from "@shared/option.types";

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
  try {
    const options = await prisma.option.findMany(); // Ensure 'option' is the correct model
    return options;
  } catch (error) {
    console.error("Error getting options:", error);
    throw error;
  }
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

/**
 * Update a Single Option
 * @param optionId The ID of Option to Update
 * @param data Option data
 */

export const updateOption = async (optionId: number, data: Partial<Option>) => {
  return await prisma.option.update({
    where: {
      id: optionId,
    },
    data,
  });
};
