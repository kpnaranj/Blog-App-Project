import express from "express";
//external dependecies
import userCtrl from "../controllers/auth.controller";
//router
const router = express.Router();

router.post("/signup", userCtrl.signup);

export default router;
