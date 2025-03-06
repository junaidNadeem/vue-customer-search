import axios from 'axios';
import mockData from '../../public/mock-data.json';

// Create axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // This won't be used in mock mode
  timeout: 10000
});

// Mock API call
export const getCustomers = async () => {
  // Simulate API delay
  console.log("mockData",mockData)
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate API response
  if (Math.random() > 0.1) { // 90% success rate
    return { data: mockData.result };
  } else {
    throw new Error('Failed to fetch customers');
  }
};

export default api; 