// src/utils/axiosInstance.ts

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message = error?.response?.data?.message;

    if (status === 401 || message?.toLowerCase().includes("invalid token")) {
      console.warn("Session expired. Logging out...");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
