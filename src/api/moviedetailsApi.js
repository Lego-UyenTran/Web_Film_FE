import axiosClient from './axiosClient';

class MovieDetailsAPI {
    getAll = (id) => {
        const url = `pages/movie-details/${id}`;
        return axiosClient.get(url, {});
    };
}

const movieDetailsApi = new MovieDetailsAPI();
export default movieDetailsApi;
