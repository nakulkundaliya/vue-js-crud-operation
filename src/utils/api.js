import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api';
export const API = ({ method, url, data = {} }) => {
  return axios({
    method,
    url: BASE_URL + url,
    data,
  });
};
