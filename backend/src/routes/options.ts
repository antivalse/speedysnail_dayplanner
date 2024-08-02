import express from "express";
import {
  createNewOption,
  getAllOptions,
  getOptionById,
} from "../controllers/option_controller";

const router = express.Router();

/**
 * GET /options
 *
 * Get All Options
 */

router.get("/api/options", getAllOptions);

/**
 * GET /options/:optionId
 *
 * Get a Single Book
 */

/**
 * POST /options
 *
 * Create a New Options
 */

router.post("/", createNewOption);

export default router;
