import axiosClient from './axiosClient';

class RegistesPageAPI {
    getAll = (params) => {
        const url = '/register';
        return axiosClient.get(url, { params });
    };
}

const registesPageApi = new RegistesPageAPI();
export default registesPageApi;
