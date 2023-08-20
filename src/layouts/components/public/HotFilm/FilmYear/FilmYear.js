import classNames from 'classnames/bind';
import styles from '../../FilmBlock/FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../../components/image/Images';
import routes from '../../../../../config/routes';
import config from '../../../../../config';
const cx = classNames.bind(styles);

function FilmYear({ data }) {
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {data.map((item) => (
                    <div
                        key={item.id}
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
                                    alt="image"
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
                ))}
            </div>
        </div>
    );
}

export default FilmYear;
