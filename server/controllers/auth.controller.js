import User from "../models/user.model";
import shortId from "shortid";
export default function signup(req, res) {
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
      res.json({
        user: success,
      });
      /*   res.json({
        message: "Signup succesfull, please signin",
      }); */
    });
  });
}
