import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// --- LIBRARY --

import homePageApi from '../../api/homeApi';
import './14_LIBRARY.css';
import Header from './Header';
import FilmHome from '../../layouts/components/public/FilmHome';
import Type from '../../layouts/components/public/TypeFilm';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
    const [listCategory, setListCategory] = useState([]);
    const [listFilm, setListFilm] = useState([]);
    const [listGender, setListGenre] = useState([]);
    const [listCountry, setlistCountry] = useState([]);
    const [listTvFilms, setListTvFilms] = useState([]);
    const [listMovies, setListMovies] = useState([]);

    let navigate = useNavigate();
    const fetchHomeApi = async (params = {}) => {
        try {
            const response = await homePageApi.getAll(params);
            const { categories, films, countries, genres, tvFilms, movies } =
                response.data;
            setListCategory(categories);
            setListFilm(films);
            setListGenre(genres);
            setlistCountry(countries);
            setListTvFilms(tvFilms);
            setListMovies(movies);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    };

    const selectValue = (object) => {
        return navigate('/newmovie', { ...object });
    };

    useEffect(() => {
        fetchHomeApi();
    }, []);

    const listTypeFilm = [
        { id: 1, type: 'PHIM ĐỀ CỬ' },
        {
            id: 2,
            type: 'PHIM LẺ MỚI CẬP NHẬT',
        },
        {
            id: 3,
            type: 'PHIM BỘ MỚI CẬP NHẬT',
        },
    ];

    const arrayFilms = listFilm.slice(0, 10);
    return (
        <div className={cx('wrapper')}>
            <Header
                listCategory={listCategory}
                listGender={listGender}
                listCountry={listCountry}
                selectValue={selectValue}
            />
            <div className={cx('content')}>
                <Type type={listTypeFilm[0]} />
                <FilmHome listFilm={arrayFilms} />
                <Type type={listTypeFilm[1]} />
                <FilmHome listFilm={listMovies} />
                <Type type={listTypeFilm[2]} />
                <FilmHome listFilm={listTvFilms} />
            </div>
            <div className={cx('new-film')}>
                <div className={cx('title')}>Phim mới đăng (chờ xử lý)</div>
                <div className={cx('list-film-name')}>
                    <a href="/" className={cx('item')}>
                        Looop Lapeta
                    </a>
                    <p>(2022),</p>
                    <a href="/" className={cx('item')}>
                        Maîtresse
                    </a>
                    <p>(1976),</p>
                    <a href="/" className={cx('item')}>
                        Kaiji 2: The Ultimate Gambler
                    </a>
                    <p>(2011),</p>
                    <a href="/" className={cx('item')}>
                        Pure Art / Mortal Affair
                    </a>
                    <p>(2016),</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
