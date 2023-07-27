import axios from "axios";

const apiKey = 'https://doctor-appointmnet.onrender.com/api/v1';


const API = axios.create({ baseURL:apiKey });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;