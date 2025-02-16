import axios from "axios";
import { getDecodeToken } from "../_utils/getCookieSession";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await getDecodeToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
