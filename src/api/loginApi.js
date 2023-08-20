import axiosClient from './axiosClient';

class LoginPageAPI {
    getAll = ({ username, password }) => {
        const url = '/login';
        return axiosClient.post(url, { username, password });
    };
}

const loginPageApi = new LoginPageAPI();
export default loginPageApi;
