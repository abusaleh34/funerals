// src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api', // replace with your backend URL
  headers: {
    'Content-type': 'application/json',
  },
});
