import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export default api;
