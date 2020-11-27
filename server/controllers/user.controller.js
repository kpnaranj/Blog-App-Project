require("dotenv").config();
import User from "../models/user.model";

export const read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
  };

