//Set up configuration
require("dotenv").config();
//Dependencies
import express from "express";
import next from "next";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
//Required development environments
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;
const db = process.env.MONGO_URL;
//bring routes
import blogRoutes from "./routes/blog.routes";
//db database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected on ${db}`));

//Build App
nextApp.prepare().then(() => {
  const app = express();
  //middlewares
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());
  //Routes

  app.use("/api", blogRoutes);

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
