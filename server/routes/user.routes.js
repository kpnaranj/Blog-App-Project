import { Router } from "express";
const router = Router();
import {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} from "../controllers/auth.controller";
import { read } from "../controllers/user.controller";

router.get("/profile", requireSignin, authMiddleware, read);

export default router;
