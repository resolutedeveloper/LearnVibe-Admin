import axiosInstance from "./axios";
import type { login, otp, updateUser, verifyOtp } from "./types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (token: string, page: number, limit: number) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/admin/get-user?limit=${limit}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const getUserById = async (id: string, token: string) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/admin/get-user/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const addUser = async (payload: updateUser, token: string) => {
  try {
    console.log(token);

    const response = await axiosInstance.post(
      `${API_BASE_URL}/admin/add-user`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const UpdateUser = async (
  payload: updateUser,
  id: string,
  token: string
) => {
  try {
    const response = await axiosInstance.put(
      `${API_BASE_URL}/admin/update-user/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const deleteUser = async (id: string, token: string) => {
  try {
    const response = await axiosInstance.delete(
      `${API_BASE_URL}/admin/delete-user/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const sendOtp = async (payload: otp): Promise<otp> => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/auth/send-otp`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("send otp failed:", error?.response?.data || error.message);
    throw error;
  }
};
export const verifyOTP = async (payload: verifyOtp): Promise<verifyOtp> => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/auth/verify-otp`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("varify otp failed:", error?.response?.data || error.message);
    throw error;
  }
};
export const logIn = async (payload: login) => {
  try {
    console.log(payload);
    const response = await axiosInstance.post(
      `${API_BASE_URL}/auth/sign-in`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("login failed:", error?.response?.data || error.message);
    throw error;
  }
};
export const getSubscription = async (token: string) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/admin-subscription`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const deleteSubscription = async (id: string, token: string) => {
  try {
    const response = await axiosInstance.delete(
      `${API_BASE_URL}/admin-subscription/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const addSubscription = async (payload: any, token: string) => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/admin-subscription`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
export const updateSubscriptionAPI = async (
  id: string,
  payload: any,
  token: string
) => {
  try {
    const response = await axiosInstance.put(
      `${API_BASE_URL}/admin-subscription/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Get Active Subscription List failed:",
      error?.response?.data || error.message
    );
    return error;
  }
};
