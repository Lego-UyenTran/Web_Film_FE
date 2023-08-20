import { useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Season.module.scss';
import Image from '../../../../components/image/Images';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Season() {
    const data = [
        {
            image: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/rbnuP7hlynAMLdqcQRCpZW9qDkV.jpg',
            season: 1,
            year: 2016,
            episode: 8,
            description:
                'Phần 1 của Stranger Things được khởi chiếu vào ngày 7/15/2016',
        },
        {
            image: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/lXS60geme1LlEob5Wgvj3KilClA.jpg',
            season: 2,
            year: 2017,
            episode: 9,
            description:
                'Phần 2 của Stranger Things được khởi chiếu vào ngày 10/27/2017',
        },
        {
            image: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
            season: 3,
            year: 2019,
            episode: 9,
            description:
                'Phần 1 của Stranger Things được khởi chiếu vào ngày 7/15/2016',
        },
        {
            image: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
            season: 4,
            year: 2016,
            episode: 8,
            description:
                'Phần 4 của Stranger Things được khởi chiếu vào ngày 5/27/2022',
        },
    ];

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather'],
            },
        });
    }, []);

    const array = data.slice(1, data.length);
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>SEASON</h3>
            <div className={cx('list')}>
                <div className={cx('first-child')}>
                    <div className={cx('left')}>
                        <Link to="#">
                            <Image
                                src={data[0].image}
                                alt="image"
                                className={cx('image')}
                            />
                        </Link>
                    </div>

                    <div className={cx('right')}>
                        <Link to="#" className={cx('season')}>
                            Phần {data[0].season}
                        </Link>
                        <span>
                            <p className={cx('year')}> {data[0].year}</p>
                            <p className={cx('episode')}>
                                - {data[0].episode} tập
                            </p>
                        </span>
                        <div className={cx('desc')}>{data[0].description}</div>
                    </div>
                </div>
                {array.map((item, index) => (
                    <div key={index} className={cx('item')}>
                        <div className={cx('left')}>
                            <Link to="#">
                                <Image
                                    src={item.image}
                                    alt="image"
                                    className={cx('image')}
                                />
                            </Link>
                        </div>

                        <div className={cx('right')}>
                            <Link to="#" className={cx('season')}>
                                Phần {item.season}
                            </Link>

                            <span>
                                <p className={cx('year')}> {item.year}</p>
                                <p className={cx('episode')}>
                                    - {item.episode} tập
                                </p>
                            </span>
                            <div className={cx('desc')}>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Season;
