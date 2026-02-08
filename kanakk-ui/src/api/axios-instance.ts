import axios from 'axios';

const API_V1_URL = 'api/v1'

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/${API_V1_URL}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
export default axiosInstance;