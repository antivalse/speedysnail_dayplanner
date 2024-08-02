/**
 * Main routes
 */

import express from "express";
import { getAllUsers, registerUser } from "../controllers/user_controller";
import { getAllOptions } from "../controllers/option_controller";

const router = express.Router();

// Router Tester

/**
 * GET /
 */
router.get("/api", (req, res) => {
  res.send({
    message: "You did it! This is a route!🫨",
  });
});

/**
 * POST /register
 * Register a new user
 */

router.post("/api/register", registerUser);

/**
 * Get users
 */

router.get("/api/users", getAllUsers);

/**
 * Option routes
 */

router.get("/api/options", getAllOptions);

export default router;
