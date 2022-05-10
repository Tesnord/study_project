import axios from "../utils/axios";

export const LoginUser = (payload) => {
  return axios.post('/users/login', payload)
};

export const RegisterUser = (payload) => {
  return axios.post('/users/register', payload)
};
