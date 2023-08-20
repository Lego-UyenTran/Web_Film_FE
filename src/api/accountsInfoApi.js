import axiosClient from './axiosClient';

class AccountsPageAPI {
    getAll = (accessToken) => {
        const url = '/accounts';
        return axiosClient.get(
            url,
            {},
            // { header: { Authorization: 'Bearer ' + accessToken } },
        );
    };
}

const accountsPageApi = new AccountsPageAPI();
export default accountsPageApi;
