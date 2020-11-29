import axios from "axios";
import cookie from "js-cookie";
import { API } from "../../config";

const axiosInstance = axios.create({
  baseURL: `${API}`,
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

export const create = async (category) => {
  const url = "api/category";
  return await axiosInstance
    .post(url, category, setAuthHeader())
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const getCategories = async () => {
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
