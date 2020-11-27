require("dotenv").config();
import User from "../models/user.model";
import shortId from "shortid";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";

export const signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    //If user already exists then execute
    if (user) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    }
    //if not it means it is a new user
    //take values from req.body
    const { name, email, password } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, profile, username });
    //it has two parameters
    //1. error and data
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      /* res.json({
        user: success,
      }); */
      res.json({
        message: "Signup succesfull, please signin",
      });
    });
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup.",
      });
    }
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match.",
      });
    }
    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role },
    });
  });
};

export const signout = (req, res) => {
  //the cookie is what makes the website work
  //so when we clean the cookie then we finish it

  res.clearCookie("token");
  res.json({
    message: "Signout success",
  });
};

export const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

export const authMiddleware = (req, res, next) => {
  const authUserId = req.auth._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User not found'
          });
      }
      req.profile = user;
      next();
  });
};

export const adminMiddleware = (req, res, next) => {
  const adminUserId = req.auth._id;
  User.findById({ _id: adminUserId }).exec((err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User not found'
          });
      }

      if (user.role !== 1) {
          return res.status(400).json({
              error: 'Admin resource. Access denied'
          });
      }

      req.profile = user;
      next();
  });
};
