import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  login,
  signup,
} from "../controllers/users.controller";
import roleMiddleware from "../middlewares/roleMiddleware";
import authMiddleware from "../middlewares/authMiddleware";

router.post("/signup", signup);
router.post("/login", login);
router.get("/", authMiddleware, roleMiddleware(["admin"]), getUsers);
router.delete("/", authMiddleware, roleMiddleware(["admin"]), deleteAllUsers);

export default router;
