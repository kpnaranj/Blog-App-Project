//Configuration
require("dotenv").config();
//Models
import Blog, { findByIdAndUpdate } from "../models/blog.model";
import Category from "../models/category.model";
import Tag from "../models/tag.model";
import User from "../models/user.model";
// External config
import { IncomingForm } from "formidable";
import slugify from "slugify";
import stripHtml from "string-strip-html";
import _ from "lodash";
import { errorHandler } from "../helpers/dbErrorHandler";
import { readFileSync } from "fs";
//Created imports
import { smartTrim } from "../helpers/smartTrim";

//Create a new Blog
export const create = (req, res) => {
  let form = new IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image Could Not Upload",
      });
    }
    const { title, body, categories, tags } = fields;
    if (!title || !title.length) {
      return res.status(400).json({
        error: "tittle is require",
      });
    }
    if (!body || body.length < 200) {
      return res.status(400).json({
        error: "Content is too Short",
      });
    }
    if (!categories || categories.length === 0) {
      return res.status(400).json({
        error: "Aleast 1 Category required",
      });
    }
    if (!tags || tags.length === 0) {
      return res.status(400).json({
        error: "Aleast 1 Tag required",
      });
    }
    let blog = new Blog();
    blog.title = title;
    blog.body = body;
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;
    blog.mdesc = stripHtml(body.substring(0, 160))["result"];
    blog.postedBy = req.auth._id;
    blog.excerpt = smartTrim(body, 320, " ", "...");
    //categories and tags
    let arrayofCategories = categories && categories.split(",");
    let arrayofTags = tags && tags.split(",");

    if (files.photo) {
      if (files.photo.size > 10000000) {
        return res.status(400).json({
          error: "Image Should Be Less Than 1 Mb",
        });
      }
      blog.photo.data = readFileSync(files.photo.path);
      blog.photo.contentType = files.photo.type;
    }
    blog.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      //res.json(result);
      Blog.findByIdAndUpdate(
        result._id,
        { $push: { categories: arrayofCategories } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          Blog.findByIdAndUpdate(
            result._id,
            { $push: { tags: arrayofTags } },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            } else {
              res.json(result);
            }
          });
        }
      });
    });
  });
};
