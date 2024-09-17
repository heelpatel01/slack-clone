// import axios from "axios";


// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/",
//   withCredentials: true, // Enables sending cookies in cross-origin requests
//   // headers: { "Content-Type": "application/json" },
// });

// export default axiosInstance;

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000/",
//   withCredentials: true, // Enables sending cookies in cross-origin requests
//   // headers: { "Content-Type": "application/json" },
// });

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL , //   Replace for local development:- "http://localhost:3000/",
  withCredentials: true,
});

export default axiosInstance;
