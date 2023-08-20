import axiosClient from './axiosClient';

class AuthApi {
    login = (params) => {
        const url = '/login';
        return axiosClient.post(url, params);
    };

    logout = (params) => {
        const url = '/logout';
        return axiosClient.post(url, params);
    };

    register = (params) => {
        const url = '/register';
        return axiosClient.post(url, params);
    };
}

const authApi = new AuthApi();
export default authApi;
