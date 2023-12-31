// api/axiosClient.js
import axios from 'axios';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const account = localStorage.getItem('account');
    if (account) {
        const accessToken = JSON.parse(account).accessToken;
        config.headers = { Authorization: 'Bearer ' + accessToken };
    }
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
