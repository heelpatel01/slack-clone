import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,  // Enables sending cookies in cross-origin requests
  headers: { "Content-Type": "application/json" }

});


export default axiosInstance;
