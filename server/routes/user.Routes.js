import express from "express";
import { getStats, updateStats } from "../controllers/statsController.js";
const router = express.Router();
import {
  login,
  register,
  updateProfile,
  userProfile,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/").get(getStats);
router.route("/").put(protect, admin, updateStats);

router.route("/me").get(protect, userProfile).put(protect, updateProfile);
export default router;
