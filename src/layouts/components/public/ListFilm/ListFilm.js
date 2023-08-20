import classNames from 'classnames/bind';
import styles from './ListFilm.module.scss';
// LIBRARY
import Image from '../../../../components/image/Images';
import routes from '../../../../config/routes';
import config from '../../../../config';
const cx = classNames.bind(styles);
function ListFilm({ films }) {
    const array = films.slice(1, films.length);
    const getYear = (day) => {
        const year = day.slice(0, 4);
        return year;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <div key={films[0].id} className={cx('item')}>
                    <div className={cx('film-image')}>
                        <a
                            href={routes.moviedetails.replace(
                                ':id',
                                films[0].id,
                            )}
                        >
                            <Image
                                src={
                                    films[0].image.includes('/images')
                                        ? `${config.urlAPI}${films[0].image}`
                                        : films[0].image
                                }
                                alt={films[0].name}
                                className={cx('image')}
                            />
                        </a>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('row-1')}>
                            <div className={cx('film-name')}>
                                <a
                                    href={routes.moviedetails.replace(
                                        ':id',
                                        films[0].id,
                                    )}
                                    className={cx('name-vi')}
                                >
                                    {films[0].name}
                                </a>
                                <div className={cx('name-en')}>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            films[0].id,
                                        )}
                                    >
                                        {films[0].englishName}
                                    </a>
                                    (
                                    <a href="/year" className={cx('year')}>
                                        {getYear(films[0].premierDate)}
                                    </a>
                                    )
                                </div>
                            </div>
                            <div className={cx('meta')}>
                                <p className={cx('time')}>
                                    {films[0].time
                                        ? `${films[0].time} phút`
                                        : ''}
                                </p>
                                <a href="/country" className={cx('country')}>
                                    {films[0].countryName}
                                </a>
                            </div>
                        </div>

                        <div className={cx('row-2')}>
                            {films[0].description}
                        </div>
                        <div className={cx('row-3')}>
                            <div className={cx('document')}>
                                <a href="#">Tài liệu</a>
                                <a href="#">Kinh dị</a>
                                <a href="#">Hài kịch & Sân khấu</a>
                                <a href="#">Tâm lí</a>
                            </div>
                            <div className={cx('IMDh')}>
                                <svg
                                    className={cx('icon')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                                        fill="#ffc107"
                                    ></path>
                                    <path
                                        d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                                        fill="#263238"
                                    ></path>
                                </svg>
                                {films[0].imdbPoint}
                            </div>
                        </div>
                    </div>
                </div>
                {array.map((item) => (
                    <div key={item.id} className={cx('item', 'item-2')}>
                        <div className={cx('film-image')}>
                            <a
                                href={routes.moviedetails.replace(
                                    ':id',
                                    item.id,
                                )}
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
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('row-1')}>
                                <div className={cx('film-name')}>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            item.id,
                                        )}
                                        className={cx('name-vi')}
                                    >
                                        {item.name}
                                    </a>
                                    <div className={cx('name-en')}>
                                        <a
                                            href={routes.moviedetails.replace(
                                                ':id',
                                                item.id,
                                            )}
                                        >
                                            {item.englishName}
                                        </a>
                                        (
                                        <a
                                            href={routes.moviedetails.replace(
                                                ':id',
                                                item.id,
                                            )}
                                            className={cx('year')}
                                        >
                                            {getYear(item.premierDate)}
                                        </a>
                                        )
                                    </div>
                                </div>
                                <div className={cx('meta')}>
                                    <p className={cx('time')}>
                                        {item.time ? `${item.time} phút` : ''}
                                    </p>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            item.id,
                                        )}
                                        className={cx('country')}
                                    >
                                        {item.countryName}
                                    </a>
                                </div>
                            </div>

                            <div className={cx('row-2')}>
                                {item.description}
                            </div>
                            <div className={cx('row-3')}>
                                <div className={cx('document')}>
                                    <a
                                        href={routes.moviedetails.replace(
                                            ':id',
                                            item.id,
                                        )}
                                    >
                                        Tài liệu
                                    </a>
                                </div>
                                <div className={cx('IMDh')}>
                                    <svg
                                        className={cx('icon')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                                            fill="#ffc107"
                                        ></path>
                                        <path
                                            d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                                            fill="#263238"
                                        ></path>
                                    </svg>
                                    {item.imdbPoint}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListFilm;
