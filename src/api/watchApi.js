import axiosClient from './axiosClient';

class WatchPageAPI {
    getAll = (id) => {
        const url = `pages/movie-details/${id}`;
        return axiosClient.get(url, {});
    };
}

const watchPageApi = new WatchPageAPI();
export default watchPageApi;
