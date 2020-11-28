import { Router } from "express";
const router = Router();

// controllers
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";
import { create, list, read, remove } from "../controllers/tag.controller";

// validators
import { runValidation } from "../validators";
import { createTagValidator } from "../validators/tag";

// only difference is methods not name 'get' | 'post' | 'delete'
router.post(
  "/tag",
  createTagValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/tags", list);
router.get("/tag/:slug", read);
router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

export default router;
