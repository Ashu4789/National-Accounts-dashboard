import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const signup = (userData) => api.post('/auth/signup', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const getProfile = () => api.get('/auth/me');

// User APIs
export const updateProfile = (data) => api.put('/user/profile', data);
export const changePassword = (data) => api.put('/user/password', data);
export const updatePreferences = (data) => api.put('/user/preferences', data);

// Contact API
export const sendContactMessage = (data) => api.post('/contact', data);

// Reports API
export const downloadReport = (reportId) => {
  return api.get(`/reports/download/${reportId}`, {
    responseType: 'blob'
  });
};

export default api;