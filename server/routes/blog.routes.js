//dependencies
import express from "express";
//external dependecies
import { create } from "../controllers/blog.controller";
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";
//router
const router = express.Router();

router.post("/blog", requireSignin, adminMiddleware, create);

export default router;
