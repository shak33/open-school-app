import axios from 'axios';
import Cookies from 'js-cookie';

type Return = ReturnType<typeof axios.create>;

export const useAxiosInstance = (): Return => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8888',
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = Cookies.get('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return axiosInstance;
};
