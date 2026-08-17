 import axios from "axios";

const API_URL = "http://localhost:8081/auth";

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = (email, password) => {
  return axios.post(
    `${API_URL}/login?email=${email}&password=${password}`
  );
};