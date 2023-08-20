import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
//COMPONENTS
import BrowseAPI from '../../api/browseApi';
import styles from './SeriesMovie.module.scss';
import Title from '../../layouts/components/public/Title';
import HeaderSeries from '../../layouts/components/public/HeaderSeries/HeaderSeries';
import FilmBlock from '../../layouts/components/public/FilmBlock';
import ListFilm from '../../layouts/components/public/ListFilm';
import Pagination from '../../layouts/components/public/Pagination/Pagination';
const cx = classNames.bind(styles);

function SeriesMovie() {
    const title = 'Phim Bộ';
    let navigate = useNavigate();
    const [listCategory, setListCategory] = useState([]);
    const [listGender, setListGenre] = useState([]);
    const [listCountry, setlistCountry] = useState([]);
    const [films, setFilms] = useState([]);
    const [isList, setIsList] = useState(false);
    const [nowIndex, setNowIndex] = useState(
        sessionStorage.getItem('nowIndex')
            ? JSON.parse(sessionStorage.getItem('nowIndex'))
            : 1,
    );
    useEffect(() => {
        // storing input name
        sessionStorage.setItem('nowIndex', JSON.stringify(nowIndex));
    }, [nowIndex]);

    //call API -> get data to render UI
    useEffect(() => {
        const fetchHomeApi = async () => {
            try {
                const params = { categoryId: 8 };
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
        fetchHomeApi();
    }, []);

    const selectValue = (object) => {
        return navigate('/newmovie', { ...object });
    };

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
            <HeaderSeries
                listCategory={listCategory}
                listGender={listGender}
                listCountry={listCountry}
                handleClick={handleClick}
                isList={isList}
                selectValue={selectValue}
            />
            {!isList ? <FilmBlock films={films} /> : <ListFilm films={films} />}
            <Pagination nowIndex={nowIndex} handleClickPage={handleClickPage} />
        </div>
    );
}

export default SeriesMovie;
