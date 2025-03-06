import axios from "axios";
import mockData from "../../public/mock-data.json";

const API_CONFIG = {
  baseURL: process.env.VUE_APP_API_URL || "https://api.example.com",
  timeout: 10000,
  retries: 3,
  retryDelay: 1000,
};

class APIError extends Error {
  constructor(message, code, status) {
    super(message);
    this.name = "APIError";
    this.code = code;
    this.status = status;
  }
}

const api = axios.create(API_CONFIG);

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  () => {
    return Promise.reject(new APIError("Request failed", "REQUEST_ERROR", 400));
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || "An unexpected error occurred";
    return Promise.reject(new APIError(message, "RESPONSE_ERROR", status));
  }
);

export const getCustomers = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simulate random errors (10% chance)
    if (Math.random() > 0.1) {
      return { data: mockData.result };
    }
    throw new APIError("Failed to fetch customers", "MOCK_ERROR", 500);
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError("Failed to fetch customers", "UNKNOWN_ERROR", error.status || 500);
  }
};

export default api;
