import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './HotMovie.module.scss';
// Components
import BrowseAPI from '../../api/browseApi';
import FilmDay from '../../layouts/components/public/HotFilm/FilmDay';
import FilmMonth from '../../layouts/components/public/HotFilm/FilmMonth';
import FilmYear from '../../layouts/components/public/HotFilm/FilmYear';
const cx = classNames.bind(styles);

function HotMovie() {
    const [isList, setIsList] = useState('day');
    const [arrayFilmsDay, setArrayFilmsDay] = useState([]);
    const [arrayFilmsMonth, setArrayFilmsMonth] = useState([]);
    const [arrayFilmsYear, setArrayFilmsYear] = useState([]);
    const handleClick = (param) => {
        setIsList(param);
    };

    useEffect(() => {
        const fetchBrowseApi = async () => {
            try {
                const params = { categoryId: 7 };
                const response = await BrowseAPI.getAll(params);
                const { films } = response.data;
                setArrayFilmsDay(films.slice(0, 10));
                setArrayFilmsMonth(films.slice(8, 18));
                setArrayFilmsYear(films.slice(10, 20));
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        };
        fetchBrowseApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Top phim được xem nhiều nhất</h1>
                <div className={cx('classify')}>
                    <button
                        onClick={() => handleClick('day')}
                        className={
                            isList === 'day'
                                ? cx('tab-item', 'day', 'active')
                                : cx('tab-item', 'day')
                        }
                    >
                        NGÀY
                    </button>
                    <button
                        onClick={() => handleClick('month')}
                        className={
                            isList === 'month'
                                ? cx('tab-item', 'month', 'active')
                                : cx('tab-item', 'month')
                        }
                    >
                        THÁNG
                    </button>
                    <button
                        onClick={() => handleClick('year')}
                        className={
                            isList === 'year'
                                ? cx('tab-item', 'year', 'active')
                                : cx('tab-item', 'year')
                        }
                    >
                        NĂM
                    </button>
                </div>
            </div>

            {isList === 'day' ? (
                <FilmDay data={arrayFilmsDay} />
            ) : isList === 'month' ? (
                <FilmMonth data={arrayFilmsMonth} />
            ) : (
                <FilmYear data={arrayFilmsYear} />
            )}
        </div>
    );
}

export default HotMovie;
