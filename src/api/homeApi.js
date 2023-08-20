import axiosClient from './axiosClient';

class HomePageAPI {
    getAll = (params) => {
        const url = '/pages/home';
        return axiosClient.get(url, { params });
    };
}

const homePageApi = new HomePageAPI();
export default homePageApi;
