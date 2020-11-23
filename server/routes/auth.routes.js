import express from "express";
//external dependecies
import { signup, signin, signout, requireSignin} from "../controllers/auth.controller";
//validators
//They both are like one
//1. validate conditions of signin
//2. Show the results of validation
import { userSigninValidator, userSignupValidator } from "../validators/auth";
import { runValidation } from "../validators";
//router
const router = express.Router();

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get('/signout', signout)
export default router;
