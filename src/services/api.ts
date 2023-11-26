import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5022/v1/api/",
});

export default api;
