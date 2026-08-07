import axios from 'axios';

// Create an instance of axios with base URL
const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your API base URL
});

export default api;