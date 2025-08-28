import axios from "axios";

// http://127.0.0.1:8000 https://alaa-rashwan-website-ae08ad6f0339.herokuapp.com/

export const mainUrl = "http://127.0.0.1:8000";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
