import axios from "axios";
import cookie from "js-cookie";
import queryString from "querystring";
import { isAuth } from "./auth";
const axiosInstance = axios.create({
  baseURL: `${process.env.API}`,
  timeout: 9000,
});

const setAuthHeader = () => {
  let token = "";
  if (process.browser) {
    token = cookie.get("token");
  } else {
    token = false;
  }
  if (token) {
    return { headers: { authorization: `Bearer ${token}` } };
  }
  return undefined;
};

export const createBlog = async (category) => {
  let url;
  if (isAuth() && isAuth().role === 1) {
    url = "api/blog";
  } else if (isAuth() && isAuth().role == 0) {
    url = "api/user/blog";
  }

  return await axiosInstance
    .post(url, category, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const getCategory = async () => {
  const url = "api/categories";
  return await axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const singleCategory = async (slug) => {
  const url = `api/category/${slug}`;
  return await axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const removeCategory = async (slug) => {
  const url = `api/category/${slug}`;
  return await axiosInstance
    .delete(url, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const listBlogsWithCategoriesAndTags = async () => {
  //console.log(category);
  const url = "api/blogs-categories-tags";
  return await axiosInstance
    .post(url, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const singleBlog = async (slug) => {
  //console.log(category);
  const url = `api/blog/${slug}`;
  return await axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const listRelated = async (blog) => {
  //console.log(category);
  const url = `api/blogs/related`;
  return await axiosInstance
    .post(url, blog)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const list = async (username) => {
  let url;
  if (username) {
    url = `api/${username}/blogs`;
  } else {
    url = "api/blog";
  }
  return await axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const removeBlog = async (slug) => {
  let url;
  if (isAuth() && isAuth().role === 1) {
    url = `api/blog/${slug}`;
  } else if (isAuth() && isAuth().role == 0) {
    url = `api/user/blog/${slug}`;
  }

  return await axiosInstance
    .delete(url, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const updateBlog = async (blog, slug) => {
  let url;
  if (isAuth() && isAuth().role === 1) {
    url = `api/blog/${slug}`;
  } else if (isAuth() && isAuth().role == 0) {
    url = `api/user/blog/${slug}`;
  }
  return await axiosInstance
    .put(url, blog, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const listSearch = async (params) => {
  let query = queryString.stringify(params);
  const url = `api/blogs/search?${query}`;
  return await axiosInstance
    .get(url, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};
