import { check } from "express-validator";

export const createTagValidator = [
  check("name").not().isEmpty().withMessage("Tag is required"),
];
