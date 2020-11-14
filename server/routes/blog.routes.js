//dependencies
import express from "express";
//external dependecies
import blogCtrl from "../controllers/blog.controller";
//router
const router = express.Router();

router.get("/", blogCtrl.time);

export default router;
