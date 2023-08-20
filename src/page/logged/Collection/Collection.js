import classNames from 'classnames/bind';
import styles from './Collection.module.scss';

//
import FilmBlock from '../../../layouts/components/public/FilmBlock';

const cx = classNames.bind(styles);
function Collection() {
    const moviesWatched = [
        {
            id: 1,
            image: 'https://image.tmdb.org/t/p/w342/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
            name: 'Black Adam',
            englishName: 'Black Adam',
        },
        {
            id: 2,
            image: 'https://image.tmdb.org/t/p/w342/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
            name: 'Thám tử lừng danh conan',
            englishName: 'Conan Dectivitive',
        },
    ];

    const watchLater = [];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('main-title')}>Bộ sưu tập phim</h1>
                <h4 className={cx('title')}>Các phim muốn xem:</h4>
                {moviesWatched.length > 0 ? (
                    <FilmBlock films={moviesWatched} />
                ) : (
                    <p className={cx('empty')}>
                        Bạn chưa thêm phim nào vào danh sách này
                    </p>
                )}
                <p className={cx('line')}></p>
                <h4 className={cx('title')}>Các phim đã xem:</h4>
                {watchLater.length > 0 ? (
                    <FilmBlock films={watchLater} />
                ) : (
                    <p className={cx('empty')}>
                        Bạn chưa thêm phim nào vào danh sách này
                    </p>
                )}
            </div>
        </div>
    );
}

export default Collection;
