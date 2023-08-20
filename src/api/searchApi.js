import axiosClient from './axiosClient';

class SearchPageAPI {
    getAll = (params) => {
        const url = 'pages/browse';
        return axiosClient.get(url, { perPage: 99999 });
    };
}

const searchPageApi = new SearchPageAPI();
export default searchPageApi;
