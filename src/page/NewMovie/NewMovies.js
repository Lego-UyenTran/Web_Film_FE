import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewMovie.module.scss';
import BrowseAPI from '../../api/browseApi';
// --LIBRARY
import Title from '../../layouts/components/public/Title';
import Header from '../../layouts/components/public/Header';
import FilmBlock from '../../layouts/components/public/FilmBlock';
import ListFilm from '../../layouts/components/public/ListFilm';
import Pagination from '../../layouts/components/public/Pagination/Pagination';
const cx = classNames.bind(styles);
function NewMovie() {
    const location = useLocation();
    const title = 'Phim Mới';
    const [listCategory, setListCategory] = useState([]);
    const [listGender, setListGenre] = useState([]);
    const [listCountry, setlistCountry] = useState([]);
    const [isList, setIsList] = useState(false);
    const [films, setFilms] = useState([]);
    const [nowIndex, setNowIndex] = useState(
        sessionStorage.getItem('nowIndex')
            ? JSON.parse(sessionStorage.getItem('nowIndex'))
            : 1,
    );
    const [paramFilter, setParamFilter] = useState({ ...location.state });
    const selectValue = (object) => {
        setParamFilter({ ...object });
    };

    const fetchHomeApi = async (params = {}) => {
        try {
            const response = await BrowseAPI.getAll(params);
            const { films, categories, countries, genres } = response.data;
            setFilms(films);
            setListCategory(categories);
            setListGenre(genres);
            setlistCountry(countries);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    };

    useEffect(() => {
        fetchHomeApi();
    }, []);

    //khi select item trong header thi set lai ParamFilter => lay lai thong tin film theo dk loc
    useEffect(() => {
        fetchHomeApi(paramFilter);
    }, [paramFilter]);

    useEffect(() => {
        // storing input name
        sessionStorage.setItem('nowIndex', JSON.stringify(nowIndex));
    }, [nowIndex]);

    const handleClick = (param) => {
        setIsList(param);
    };

    const handleClickPage = async (page) => {
        const params = { categoryId: 7, page };
        const response = await BrowseAPI.getAll(params);
        const { films } = response.data;
        setNowIndex(page);
        setFilms(films);
    };

    return (
        <div className={cx('wrapper')}>
            <Title title={title} />
            <div className="header-nav">
                <Header
                    listCategory={listCategory}
                    listGender={listGender}
                    listCountry={listCountry}
                    handleClick={handleClick}
                    isList={isList}
                    selectValue={selectValue}
                />
            </div>
            {!isList ? <FilmBlock films={films} /> : <ListFilm films={films} />}
            <Pagination nowIndex={nowIndex} handleClickPage={handleClickPage} />
        </div>
    );
}

export default NewMovie;
