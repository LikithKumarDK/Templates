import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL, // Replace with your API base URL
});

// Request interceptor
api.interceptors.request.use((config) => {
  return config;
}, (error) => {
  // Handle request error
  console.error(error);
  // eslint-disable-next-line no-undef
  return Promise.reject(error);
});

// Response interceptor
api.interceptors.response.use((response) => {
  // Handle successful response
  return response;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

export default api;