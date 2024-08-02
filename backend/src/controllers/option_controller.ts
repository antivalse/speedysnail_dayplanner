/**
 * Option controller
 */

import { Request, Response } from "express";
import {
  createOption,
  getOption,
  getOptions,
} from "../services/option_service";

/**
 * Create a New Option
 */

export const createNewOption = async (req: Request, res: Response) => {
  try {
    const option = await createOption(req.body);
    res.status(201).send(option);
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Failed to create new option in database",
    });
  }
};

/**
 * Get All Options
 */

export const getAllOptions = async (req: Request, res: Response) => {
  try {
    const options = await getOptions();
    res.status(200).send(options);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch options" });
  }
};

/**
 * Get a Single Option
 */

export const getOptionById = async (req: Request, res: Response) => {
  const optionId = Number(req.params.optionId);

  try {
    const option = await getOption(optionId);
    res.send({ status: "success", data: option });
  } catch (err: any) {
    if (err.code === "P2025") {
      // NotFoundError
      res.status(404).send({ status: "error", message: "Option Not Found" });
    } else {
      res.status(500).send({
        status: "error",
        message: "Something went wrong when querying the database",
      });
    }
  }
};
