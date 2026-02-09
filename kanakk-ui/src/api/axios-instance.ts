import axios from 'axios';

const V1_API_URL = import.meta.env.VITE_V1_API_URL;

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/${V1_API_URL}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
export default axiosInstance;