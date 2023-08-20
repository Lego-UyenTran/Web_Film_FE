//Libary
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Watching.module.scss';
import WebFont from 'webfontloader';

//Components
import routes from '../../config/routes';
import Header from '../../layouts/components/HeaderDefault';
import Footer from '../../layouts/components/Footer';
import watchPageApi from '../../api/watchApi';

//icon
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Watching() {
    const id = window.location.href.split('/')[4];
    const getUserName = localStorage.getItem('account');
    const [indexChoiceEn, setIndexChoiceEn] = useState();
    const [indexChoiceVn, setIndexChoiceVn] = useState();
    const [data, setData] = useState([]);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    useEffect(() => {
        const fetchWatchMovies = async () => {
            try {
                const response = await watchPageApi.getAll(id);
                const { data } = response;
                setData(data);
            } catch (error) {
                console.log('Failed tp fetch product list: ', error);
            }
        };
        fetchWatchMovies();
    }, []);

    //pointLike / dispoinDisLike - en
    const [poinLike, setPoinLike] = useState(
        sessionStorage.getItem('poin')
            ? JSON.parse(sessionStorage.getItem('poin')).poinLike
            : -1,
    );
    const [poinDisLike, setPoinDisLike] = useState(
        sessionStorage.getItem('poin')
            ? JSON.parse(sessionStorage.getItem('poin')).poinDisLike
            : -1,
    );
    // vn
    const [poinLikeVn, setPoinLikeVn] = useState(
        sessionStorage.getItem('poin')
            ? JSON.parse(sessionStorage.getItem('poin')).poinLikeVn
            : -1,
    );
    const [poinDisLikeVn, setPoinDisLikeVn] = useState(
        sessionStorage.getItem('poin')
            ? JSON.parse(sessionStorage.getItem('poin')).poinDisLikeVn
            : -1,
    );

    //save poin
    useEffect(() => {
        sessionStorage.setItem(
            'poin',
            JSON.stringify({
                poinLike,
                poinDisLike,
                poinLikeVn,
                poinDisLikeVn,
            }),
        );
    }, [poinLike, poinDisLike, poinLikeVn, poinDisLikeVn]);

    // let index = 1;
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather', 'serif'],
            },
        });
    }, []);

    const mediaEn = [
        {
            id: 1,
            name: 'HC HDRip 1400MB DD2 0 x264-GalaxyRG',
            author: 'Hotmart',
            poin_LikeEn: 8,
            poin_DisLikeEn: 0,
        },
        {
            id: 2,
            name: '--&gt;TRAILER&lt;-- Black Adam Official Trailer - DC',
            author: ' 60610',
            poin_LikeEn: 1,
            poin_DisLikeEn: 3,
        },
        {
            id: 3,
            name: 'HC HDRip 1400MB DD2 0 x264-GalaxyRG',
            author: 'Shavinka',
            poin_LikeEn: 0,
            poin_DisLikeEn: 0,
        },
        {
            id: 4,
            name: 'HDRip.x264.AC3-EVO',
            author: 'Jan_Dejonghe',
            poin_LikeEn: 1,
            poin_DisLikeEn: 0,
        },
    ];

    const mediaVn = [
        {
            id: 1,
            name: 'WEBRip.x264.AAC2.0-SHITBOX',
            author: '- peacemaker2021',
            poin_LikeVn: 3,
            poin_DisLikeVn: 0,
        },
        {
            id: 2,
            name: '--&gt;TRAILER&lt;-- Black Adam Official Trailer - DC',
            author: ' 60610',
            poin_LikeVn: 1,
            poin_DisLikeVn: 1,
        },
    ];

    //FUNCTION
    const handleClickTickEn = (index) => {
        setIndexChoiceEn();
    };

    const handleClickChoiceEn = (index) => {
        setIndexChoiceEn(index);
    };

    const handleClickTickVn = (index) => {
        setIndexChoiceVn();
    };

    const handleClickChoiceVn = (index) => {
        setIndexChoiceVn(index);
    };

    //Click btn like of En-sub
    const handleClickBtnLike = (index) => {
        if (poinDisLike !== index) {
            setPoinLike(index);

            if (poinLike === index) {
                setPoinLike();
            }
        }
    };
    //Click btn dislike
    const handleClickBtnDisLike = (index) => {
        if (poinLike !== index) {
            setPoinDisLike(index);

            if (poinDisLike === index) {
                setPoinDisLike();
            }
        }
    };

    //Btn- like of Vn- sub
    const handleClickBtnLikeVn = (index) => {
        if (poinDisLikeVn !== index) {
            setPoinLikeVn(index);

            if (poinLikeVn === index) {
                setPoinLikeVn();
            }
        }
    };
    //Click btn dislike
    const handleClickBtnDisLikeVn = (index) => {
        if (poinLikeVn !== index) {
            setPoinDisLikeVn(index);
            if (poinDisLikeVn === index) {
                setPoinDisLikeVn();
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <div className={cx('video-block')}>
                    <iframe
                        className={cx('video')}
                        width="100%"
                        height="600"
                        src="https://www.youtube.com/embed/W1PwTcDxF7w"
                        title="What’s New, Scooby - Doo? - Tập 9 - Phim Hoạt Hình Tiếng Việt"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={cx('guide')}>
                    <p>
                        Phim không có tiếng / mất tiếng nhân vật / âm thanh bị
                        rè?
                    </p>
                    <Link to="#">Xem hướng dẫn</Link>
                </div>
                <div className={cx('section')}>
                    <div className={cx('detail')}>
                        <div className={cx('title')}>
                            <div className={cx('row-1')}>
                                <div className={cx('row-left')}>
                                    <div className={cx('name-film')}>
                                        <h2 className={cx('name-vn')}>
                                            {data?.film?.name}
                                        </h2>
                                        <span>
                                            <p className={cx('name-en')}>
                                                {data?.film?.englishName}
                                            </p>

                                            <Link to="#">
                                                (
                                                {data?.film?.premierDate.slice(
                                                    0,
                                                    4,
                                                )}
                                                )
                                            </Link>
                                        </span>
                                    </div>
                                    <div className={cx('button')}>
                                        <Link to="#" className={cx('fb')}>
                                            <FacebookIcon
                                                className={cx(
                                                    'icon-fb',
                                                    'icon',
                                                )}
                                            />
                                            <p>Chia sẻ</p>
                                        </Link>
                                        {/* <Link
                                            to={
                                                getUserName
                                                    ? routes.collection
                                                    : routes.login
                                            }
                                            className={cx('collection')}
                                        >
                                            <AddOutlinedIcon
                                                className={cx(
                                                    'icon-add',
                                                    'icon',
                                                )}
                                            />
                                            <p>Bộ sưu tập</p>
                                        </Link> */}

                                        <div className={cx('collection')}>
                                            {option1 === false &&
                                            option2 === false ? (
                                                <Link
                                                    to={
                                                        getUserName
                                                            ? routes.collection
                                                            : routes.login
                                                    }
                                                    className={cx(
                                                        'item',
                                                        'album',
                                                    )}
                                                >
                                                    <AddOutlinedIcon
                                                        className={cx(
                                                            'icon',
                                                            'icon-add',
                                                        )}
                                                    />

                                                    <p className={cx('text')}>
                                                        Bộ sưu tập
                                                    </p>
                                                </Link>
                                            ) : option1 ? (
                                                <div
                                                    className={cx(
                                                        'item',
                                                        'option1',
                                                    )}
                                                >
                                                    <CheckOutlinedIcon
                                                        className={cx(
                                                            'icon-check',
                                                        )}
                                                    />

                                                    <p className={cx('text')}>
                                                        Đã xem
                                                    </p>
                                                </div>
                                            ) : (
                                                <div
                                                    className={cx(
                                                        'item',
                                                        'option2',
                                                    )}
                                                >
                                                    <RemoveRedEyeOutlinedIcon
                                                        className={cx(
                                                            'icon-eye',
                                                        )}
                                                    />
                                                    <p className={cx('text')}>
                                                        Muốn xem
                                                    </p>
                                                </div>
                                            )}

                                            {getUserName ? ( //Login
                                                <div
                                                    className={cx(
                                                        'add-collection',
                                                    )}
                                                >
                                                    {!option1 ? (
                                                        <div
                                                            className={cx(
                                                                'watched',
                                                            )}
                                                            onClick={() =>
                                                                setOption1(true)
                                                            }
                                                        >
                                                            Thêm vào danh sách
                                                            <b>Đã xem</b>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={cx(
                                                                'watched',
                                                            )}
                                                            onClick={() =>
                                                                setOption1(
                                                                    false,
                                                                )
                                                            }
                                                        >
                                                            Loại khỏi danh sách
                                                            <b>Đã xem</b>
                                                        </div>
                                                    )}

                                                    {!option2 ? (
                                                        <div
                                                            className={cx(
                                                                'watched',
                                                            )}
                                                            onClick={() =>
                                                                setOption2(true)
                                                            }
                                                        >
                                                            Thêm vào danh sách
                                                            <b>Muốn xem</b>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={cx(
                                                                'watched',
                                                            )}
                                                            onClick={() =>
                                                                setOption2(
                                                                    false,
                                                                )
                                                            }
                                                        >
                                                            Loại khỏi danh sách
                                                            <b> Muốn xem</b>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        <Link to="#" className={cx('similar')}>
                                            <TheatersTwoToneIcon
                                                className={cx(
                                                    'icon-film',
                                                    'icon',
                                                )}
                                            />
                                            <p>Phim tương tự</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('row-right')}>
                                    <button className={cx('bilingual-tab')}>
                                        Tab song ngữ
                                    </button>
                                    <span className={cx('back-home')}>
                                        <svg
                                            className={cx('icon-back')}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z"></path>
                                        </svg>
                                        <p className={cx('text')}>
                                            Về trang giới thiệu phim
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className={cx('subtitle-list-intro')}>
                            Dưới đây là các phụ đề của phim này được hệ thống
                            lấy tự động từ subscene.com. Nếu chọn được một phụ
                            đề vừa ý (khớp thời gian & dịch chuẩn), hãy phụ đề
                            đó để lần sau xem lại phim, hệ thống sẽ tự động sử
                            dụng phụ đề đó cho bạn!
                        </p>
                        <div className={cx('custom-subtitle')}>
                            <div>
                                Bạn cũng có thể upload file phụ đề của riêng
                                bạn:
                                <Link to="#" className={cx('click-here')}>
                                    Click vào đây!
                                </Link>
                            </div>
                            <div className={cx('find-sub')}>
                                <Link to="https://subscene.com/subtitles/smile-2022">
                                    Tìm phụ đề cho phim này trên Subscene
                                </Link>
                            </div>
                        </div>
                        <div className={cx('row-subtitle')}>
                            <div className={cx('row-subtitle-left')}>
                                <h4 className={cx('sub')}>Tiếng Anh</h4>
                                {mediaEn.map((item, index) => (
                                    <div key={item.id} className={cx('media')}>
                                        <div className={cx('media-left')}>
                                            <svg
                                                className={cx('icon-cc')}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z"></path>
                                            </svg>
                                            <div
                                                className={cx('media-content')}
                                            >
                                                <p>{item.name}</p>-
                                                <i>{item.author}</i>
                                            </div>
                                        </div>
                                        <div className={cx('media-right')}>
                                            {indexChoiceEn === index ? (
                                                <button
                                                    className={cx('icon-done')}
                                                    onClick={() =>
                                                        handleClickTickEn(index)
                                                    }
                                                >
                                                    <DoneTwoToneIcon
                                                        className={cx(
                                                            'icon-tick',
                                                        )}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    className={cx('btn-choice')}
                                                    onClick={() =>
                                                        handleClickChoiceEn(
                                                            index,
                                                        )
                                                    }
                                                >
                                                    Chọn
                                                </button>
                                            )}
                                            <div
                                                className={cx('like-container')}
                                            >
                                                <div
                                                    className={cx('rating-col')}
                                                >
                                                    <p
                                                        className={
                                                            item.poin_LikeEn !==
                                                                0 ||
                                                            (poinLike !== -1 &&
                                                                poinLike ===
                                                                    index)
                                                                ? cx(
                                                                      'coin',
                                                                      'like',
                                                                  )
                                                                : cx('coin')
                                                        }
                                                    >
                                                        {poinLike === index
                                                            ? 1 +
                                                              item.poin_LikeEn
                                                            : item.poin_LikeEn}
                                                    </p>
                                                    <ThumbUpAltTwoToneIcon
                                                        className={
                                                            poinLike === index
                                                                ? cx(
                                                                      'icon-like',
                                                                      'active-choice',
                                                                  )
                                                                : cx(
                                                                      'icon-like',
                                                                  )
                                                        }
                                                        onClick={() =>
                                                            handleClickBtnLike(
                                                                index,
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={cx('rating-col')}
                                                >
                                                    <p
                                                        className={
                                                            item.poin_DisLikeEn !==
                                                                0 ||
                                                            (poinDisLike !==
                                                                -1 &&
                                                                poinDisLike ===
                                                                    index)
                                                                ? cx(
                                                                      'coin',
                                                                      'dislike',
                                                                  )
                                                                : cx('coin')
                                                        }
                                                    >
                                                        {poinDisLike === index
                                                            ? item.poin_DisLikeEn +
                                                              1
                                                            : item.poin_DisLikeEn}
                                                    </p>
                                                    <ThumbDownAltTwoToneIcon
                                                        className={
                                                            poinDisLike ===
                                                            index
                                                                ? cx(
                                                                      'icon-dislike',
                                                                      'active-choice',
                                                                  )
                                                                : cx(
                                                                      'icon-dislike',
                                                                  )
                                                        }
                                                        onClick={() =>
                                                            handleClickBtnDisLike(
                                                                index,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('row-subtitle-right')}>
                                <h4 className={cx('sub')}>Tiếng Việt</h4>
                                {mediaVn.map((item, index) => (
                                    <div key={item.id} className={cx('media')}>
                                        <div className={cx('media-left')}>
                                            <svg
                                                className={cx('icon-cc')}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z"></path>
                                            </svg>
                                            <div
                                                className={cx('media-content')}
                                            >
                                                <p>{item.name}</p>-
                                                <i>{item.author}</i>
                                            </div>
                                        </div>
                                        <div className={cx('media-right')}>
                                            {indexChoiceVn === index ? (
                                                <button
                                                    className={cx('icon-done')}
                                                    onClick={() =>
                                                        handleClickTickVn(index)
                                                    }
                                                >
                                                    <DoneTwoToneIcon
                                                        className={cx(
                                                            'icon-tick',
                                                        )}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    className={cx('btn-choice')}
                                                    onClick={() =>
                                                        handleClickChoiceVn(
                                                            index,
                                                        )
                                                    }
                                                >
                                                    Chọn
                                                </button>
                                            )}
                                            <div
                                                className={cx('like-container')}
                                            >
                                                <div
                                                    className={cx('rating-col')}
                                                >
                                                    <p
                                                        className={
                                                            item.poin_LikeVn !==
                                                                0 ||
                                                            (poinLikeVn !==
                                                                -1 &&
                                                                poinLikeVn ===
                                                                    index)
                                                                ? cx(
                                                                      'coin',
                                                                      'like',
                                                                  )
                                                                : cx('coin')
                                                        }
                                                    >
                                                        {poinLikeVn === index
                                                            ? 1 +
                                                              item.poin_LikeVn
                                                            : item.poin_LikeVn}
                                                    </p>
                                                    <ThumbUpAltTwoToneIcon
                                                        className={
                                                            poinLikeVn === index
                                                                ? cx(
                                                                      'icon-like',
                                                                      'active-choice',
                                                                  )
                                                                : cx(
                                                                      'icon-like',
                                                                  )
                                                        }
                                                        onClick={() =>
                                                            handleClickBtnLikeVn(
                                                                index,
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={cx('rating-col')}
                                                >
                                                    <p
                                                        className={
                                                            item.poin_DisLikeVn !==
                                                                0 ||
                                                            (poinDisLikeVn !==
                                                                -1 &&
                                                                poinDisLikeVn ===
                                                                    index)
                                                                ? cx(
                                                                      'coin',
                                                                      'dislike',
                                                                  )
                                                                : cx('coin')
                                                        }
                                                    >
                                                        {poinDisLikeVn === index
                                                            ? item.poin_DisLikeVn +
                                                              1
                                                            : item.poin_DisLikeVn}
                                                    </p>
                                                    <ThumbDownAltTwoToneIcon
                                                        className={
                                                            poinDisLikeVn ===
                                                            index
                                                                ? cx(
                                                                      'icon-dislike',
                                                                      'active-choice',
                                                                  )
                                                                : cx(
                                                                      'icon-dislike',
                                                                  )
                                                        }
                                                        onClick={() =>
                                                            handleClickBtnDisLikeVn(
                                                                index,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('submit-cmt')}>
                            Để gửi bình luận phim, vui lòng
                            <Link to={routes.login}>Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default Watching;
