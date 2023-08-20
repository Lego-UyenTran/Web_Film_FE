import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Casts.module.scss';

//LIBRARY
import Header from '../../layouts/components/HeaderDefault';
import Footer from '../../layouts/components/Footer';
import Image from '../../components/image/Images';
import './CastsResponsive.css';
const cx = classNames.bind(styles);

function Casts() {
    const [isClickImage, setIsClickImage] = useState(false);

    const introduce = {
        id: 1,
        name: 'Sosie Bacon',
        image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4GvBAsv0ZneN162YxVJnTqlQZts.jpg',
        jobs: 'Diễn viên',
        sex: 'Nữ',
        birthday: '3/15/1992',
        placeOfBirth: 'US',
        description:
            'Sosie Ruth Bacon (sinh ngày 15 tháng 3 năm 1992) là một nữ diễn viên người Mỹ. ). James Duff, nhà sản xuất của The Closer, đã bị thúc giục bởi màn trình diễn của Bacon trong Loverboy đề nghị cô đóng vai Charlie cháu gái của Phó Cảnh sát trưởng Brenda Leigh Johnson trong mùa thứ năm của chương trình. Mặc dù cha mẹ cô phản đối việc cô tham gia đóng phim, Bacon đã chấp nhận vai diễn này và xuất hiện trong bốn tập phim cùng với mẹ cô, người đóng vai trò Cảnh sát trưởng Johnson. Bacon đã miêu tả nhân vật Skye Miller trong bộ phim truyền hình 13 Reasons Why.',
    };

    const films = [
        {
            id: 1,
            name: 'Lost Boy',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gM3UEc20NQW4wflMsT1kApsK7hw.jpg',
        },

        {
            id: 2,
            name: 'Smile',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
        },
        {
            id: 3,
            name: 'The Last Summer',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nAn3MRAUwbjVApN3qYkvsTEOAvx.jpg',
        },

        {
            id: 4,
            name: 'Smile',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
        },
        {
            id: 5,
            name: 'Ana Maria In Novela Land',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4GvBAsv0ZneN162YxVJnTqlQZts.jpg',
        },

        {
            id: 6,
            name: 'Smile',
            image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
        },
    ];

    const images = [
        {
            id: 1,
            image: 'https://image.tmdb.org/t/p/w220_and_h330_face/hMsjirweIK9wGuy49l52b8SnLuv.jpg',
        },
        {
            id: 2,
            image: 'https://image.tmdb.org/t/p/w220_and_h330_face/pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg',
        },
        {
            id: 3,
            image: 'https://image.tmdb.org/t/p/w220_and_h330_face/4cxNfiABrndn6izXAt6TsjFfYBZ.jpg',
        },
        {
            id: 5,
            image: 'https://image.tmdb.org/t/p/w220_and_h330_face/pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg',
        },
        {
            id: 6,
            image: 'https://image.tmdb.org/t/p/w220_and_h330_face/4cxNfiABrndn6izXAt6TsjFfYBZ.jpg',
        },
    ];

    //ffc
    // let getIdImage;
    const handleClickImage = (id) => {
        // getIdImage = id;
        if (isClickImage === true) {
            setIsClickImage(false);
        } else setIsClickImage(true);
    };

    const handleCloseImage = () => {
        setIsClickImage(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <div key={introduce.id} className={cx('content')}>
                    <div className={cx('column-left')}>
                        <div className={cx('img')}>
                            <Image
                                src={introduce.image}
                                alt={introduce.name}
                                className={cx('image')}
                            />
                        </div>
                        <div className={cx('introduce')}>
                            <p className={cx('title')}>Thông tin cá nhân</p>
                            <div className={cx('job')}>
                                <p>Nghề nghiệp</p>
                                <p>{introduce.jobs}</p>
                            </div>
                            <div className={cx('sex')}>
                                <p>Giới tính</p>
                                <p>{introduce.sex}</p>
                            </div>
                            <div className={cx('birthday')}>
                                <p>Ngày sinh</p>
                                <p>{introduce.birthday}</p>
                            </div>
                            <div className={cx('place-of-birth')}>
                                <p>Nơi sinh</p>
                                <p>{introduce.placeOfBirth}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('column-right')}>
                        <h1 className={cx('name')}>Sosie Bacon</h1>
                        <div className={cx('bio')}>
                            <p className={cx('title')}>Tiểu sử</p>
                            <p className={cx('content-des')}>
                                {introduce.description}
                            </p>
                        </div>
                        <div className={cx('joined')}>
                            <p className={cx('title')}>Các phim đã tham gia</p>
                            <div className={cx('list')}>
                                {films.map((item) => (
                                    <div key={item.id} className={cx('item')}>
                                        <span>
                                            <a href="/">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    className={cx('image')}
                                                />
                                            </a>
                                            <p className={cx('film-name')}>
                                                {item.name}
                                            </p>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('list-image')}>
                            <p className={cx('title')}>Ảnh</p>
                            <div className={cx('list')}>
                                {images.map((item) => (
                                    <div
                                        id={item.id}
                                        className={cx('item')}
                                        onClick={(id) => handleClickImage(id)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt="image"
                                            className={cx('image')}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
            <div className={isClickImage ? cx('modal-open') : cx('modal')}>
                <div
                    className={cx('modal-close')}
                    onClick={() => handleCloseImage()}
                ></div>
                <div className={cx('wrapper-modal')}>
                    <Image
                        src={images[2].image}
                        alt="image"
                        className={cx('modal-image')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Casts;
