import React from 'react';
import { useState, useEffect } from 'react';
import config from '../../../../config/index';
import classNames from 'classnames/bind';
// --- LIBRARY --
import routes from '../../../../config/routes';
import './14_LIBRARY.css';
import styles from './FilmHome.module.scss';
import Image from '../../../../components/image/Images';

const cx = classNames.bind(styles);

function FilmHome({ listFilm }) {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () =>
                window.removeEventListener('resize', handleWindowResize);
        }, []);

        return { width };
    };
    const viewPort = useViewport();
    const NotDesktop = viewPort.width >= 740 && viewPort.width <= 1023;
    const Desktop = viewPort.width >= 1024;
    const [array, setArray] = useState(() => {
        return viewPort.width >= 740 && viewPort.width <= 1023
            ? listFilm.slice(0, 8)
            : [];
    });

    useEffect(() => {
        if (NotDesktop && array.length === 0) setArray(listFilm.slice(0, 8));
        Desktop && setArray(listFilm);
    }, [viewPort.width]);

    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {(NotDesktop ? listFilm.slice(0, 8) : listFilm).map(
                    (item, index) => (
                        <div
                            key={index}
                            className={cx('column', 'l-2-4', 'm-3', 'c-6')}
                        >
                            <div className={cx('item')}>
                                <a
                                    href={routes.moviedetails.replace(
                                        ':id',
                                        item.id,
                                    )}
                                    className={cx('avata')}
                                >
                                    <Image
                                        src={
                                            item.image.includes('/images')
                                                ? `${config.urlAPI}${item.image}`
                                                : item.image
                                        }
                                        alt={item.name}
                                        className={cx('image')}
                                    />
                                </a>
                                <span className={cx('film-name')}>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            item.id,
                                        )}
                                        className={cx('name')}
                                    >
                                        {item.name}
                                    </a>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            item.id,
                                        )}
                                        className={cx('English-name')}
                                    >
                                        {item.englishName}
                                    </a>
                                </span>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

export default FilmHome;
