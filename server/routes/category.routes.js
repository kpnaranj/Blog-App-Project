import { Router } from "express";
const router = Router();
import { create, list, read , remove} from "../controllers/category.controller";

// validators
import { runValidation } from "../validators";
import { categoryCreateValidator } from "../validators/category";
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";
//Create a category
router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
//Get a list of categories
router.get("/categories", list);
//Get single category
router.get("/category/:slug", read);
//Delete category
router.delete("/category/:slug", remove);

export default router;
