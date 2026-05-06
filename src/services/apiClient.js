import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://54.82.90.214:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRedirecting = false;

// Add token to requests automatically
apiClient.interceptors.request.use(
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

// Handle 401 errors (invalid/expired token) and 403 errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if ((error.response?.status === 401 || error.response?.status === 403) && !isRedirecting) {
      isRedirecting = true;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setTimeout(() => {
        window.location.href = '/login';
        isRedirecting = false;
      }, 100);
    }
    return Promise.reject(error);
  }
);

export default apiClient;