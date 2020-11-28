import { Router } from "express";
const router = Router();
import { create} from "../controllers/category.controller";

// validators
import { runValidation } from "../validators";
import { categoryCreateValidator } from "../validators/category";
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";

router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);


export default router;
