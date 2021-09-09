import authHeader from "./auth-header";

const API_URL = "/api/test/";

const getPublicContent = () => {
  return fetch.get(API_URL + "all");
};

const getUserBoard = () => {
  return fetch.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return fetch.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return fetch.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};