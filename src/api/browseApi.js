import axiosClient from './axiosClient';

class BrowseAPI {
    getAll = (params) => {
        // {categoryId: 7}
        const url = '/pages/browse';
        return axiosClient.get(url, { params });
    };
}

const browseApi = new BrowseAPI();
export default browseApi;
