import { check } from "express-validator";

export const userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is Required"),
  check("email").isEmail().withMessage("Must Be A Valid Email Address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Must Be At Least 6 Charater Long"),
];

export const userSigninValidator = [
  check("email").isEmail().withMessage("Must Be A Valid Email Address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Must Be At Least 6 Charater Long"),
];
