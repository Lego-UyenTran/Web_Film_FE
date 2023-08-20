/*dua cac phan muon export vao day  */
import routes from './routes';

const config = {
    routes,
    urlAPI: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:3300',
};

export default config;
