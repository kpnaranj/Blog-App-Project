import { check } from "express-validator";

export const categoryCreateValidator = [
  check("name").not().isEmpty().withMessage("Category is required"),
];
