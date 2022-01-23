import axios from "axios";

const path = "http://localhost:50500/review/api/Users";
//44366 https
//44599 http

export const login = async (userData) => {
  return await axios.post(`${path}/login`, userData);
};
