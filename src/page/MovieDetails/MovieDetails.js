import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MovieDetails.module.scss';
import React from 'react';
import 'animate.css';
// --COMPONENTS--
import Image from '../../components/image/Images';
import Header from '../../layouts/components/HeaderDefault';
import FoundSimilar from '../../layouts/components/public/FoundSimilar/FoundSimilar';
import Footer from '../../layouts/components/Footer';
import Season from '../../layouts/components/public/Season/Season';
import routes from '../../config/routes';
import movieDetailsApi from '../../api/moviedetailsApi';
import config from '../../config/index';
// --ICONS--
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const cx = classNames.bind(styles);

function MovieDetails() {
    const id = window.location.href.split('/')[4];
    const [data, setData] = useState([]);
    const [people, setPeople] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [genres, setGenres] = useState([]);
    const [listFilmSuggest, setListFilmSuggest] = useState([]);
    const premierYear = data?.film?.premierDate.slice(0, 4);

    //Call API to get data
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await movieDetailsApi.getAll(id);
                const { data } = response;

                setData(data);
                console.log('data <<: ', data);
                setTemp(data.film.People.length);
                //cast
                setPeople(data.film.People);
                setArray(data.film.People.slice(number, value));
                //trailer
                setTrailer(data.film.Trailers);
                setArray2(data.film.Trailers.slice(index, valueofT));
                //genres
                setGenres(data.film.Genres);
                //listFilmSuggest
                setListFilmSuggest(data.listFilmSuggest);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        };
        fetchMovieDetails();
    }, []);

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
    const isMobile = viewPort.width <= 576;
    const isTablet = viewPort.width <= 1024;
    const inTheMiddle = viewPort.width >= 1025 && viewPort.width <= 1200;

    //set value when change viewPort (casts)
    const [value, setValue] = useState(() => {
        let temp;
        if (isTablet) temp = 4;
        else if (!isTablet && inTheMiddle) temp = 5;
        else temp = 6;
        return temp;
    });
    // (trailer)
    const [valueofT, setValueofT] = useState(() => {
        let n;
        if (isTablet) n = 2;
        else if (!isTablet && inTheMiddle) n = 2;
        else n = 4;
        return n;
    });

    const getUserName = localStorage.getItem('account');
    const [index, setIndex] = useState(0);
    const [number, setNumber] = useState(0);
    const [array2, setArray2] = useState([]);
    const [array, setArray] = useState([]); // useState(castData.slice(number, value));
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [temp, setTemp] = useState(0);

    //--setItem for Casts
    useEffect(() => {
        if (people) {
            if (isMobile && value !== 2) {
                setArray(people.slice(0, 2));
                setNumber(0);
                setValue(2);
            } else if (!isMobile && isTablet && value !== 4) {
                setArray(people.slice(0, 4));
                setNumber(0);
                setValue(4);
            } else if (!isTablet && inTheMiddle && value !== 5) {
                setArray(people.slice(0, 5));
                setNumber(0);
                setValue(5);
            } else if (!isTablet && !inTheMiddle && value !== 6) {
                setArray(people.slice(0, 6));
                setNumber(0);
                setValue(6);
            }
        }
    }, [isTablet, viewPort.width, people, value, inTheMiddle]);

    //setItem for Trailer
    useEffect(() => {
        if (trailer) {
            if (isTablet && valueofT !== 2) {
                setArray2(trailer.slice(0, 2));
                setIndex(0);
                setValueofT(2);
            } else if (!isTablet && valueofT !== 4) {
                if (trailer) {
                    setArray2(trailer.slice(0, 4));
                    setIndex(0);
                    setValueofT(4);
                }
            }
        }
    }, [isTablet, viewPort.width, trailer]);

    //Hanle lick next - prev casts
    const handleNext = () => {
        const nowIndex = number + value; //6
        setNumber(nowIndex);
        //sau khi set -> chay het ffc nay moi re-render Comp App -> number = nowIndex
        nowIndex + value <= temp //6 + 6 = 12
            ? setArray(people.slice(nowIndex, nowIndex + value)) //cd new array = 6;
            : setArray(people.slice(nowIndex, temp)); // cd  new array < 6
    };

    const handlePrev = () => {
        const nowIndex = number - value;
        setNumber(nowIndex);
        setArray(people.slice(nowIndex, number));
    };

    //Handle click next TRAILER
    const handleTrailerNext = () => {
        const nowIndex = index + valueofT;
        setIndex(nowIndex);
        nowIndex + valueofT <= trailer.length
            ? setArray2(trailer.slice(nowIndex, nowIndex + valueofT))
            : setArray2(trailer.slice(nowIndex, trailer.length));
    };

    // Hanle click prev TRAILER
    const handleTrailerPrev = () => {
        const nowIndex = index - valueofT;
        setIndex(nowIndex);
        setArray2(trailer.slice(nowIndex, index));
    };

    // -- END

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('background')}>
                <Image
                    src={
                        data?.film?.image?.includes('/images/')
                            ? `${config.urlAPI}${data.film?.backgroundImage}`
                            : data.film?.backgroundImage
                    }
                    alt="image"
                    className={cx('image')}
                />
            </div>

            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className={cx('details')}>
                        <div className={cx('column-left')}>
                            <div className={cx('film-image')}>
                                <Image
                                    src={
                                        data?.film?.image?.includes('/images/')
                                            ? `${config.urlAPI}${data.film?.image}`
                                            : data.film?.image
                                    }
                                    alt="image"
                                    className={cx('image')}
                                />
                            </div>
                            <Link
                                to={routes.watching.replace(':id', id)}
                                className={cx('button-play')}
                            >
                                <svg
                                    className={cx('icon')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                </svg>
                                <p className={cx('text')}>XEM PHIM </p>
                            </Link>
                        </div>
                        <div className={cx('column-right')}>
                            <h3 className={cx('title')}>{data?.film?.name}</h3>
                            <span className={cx('subtitle')}>
                                <p className={cx('sub')}>
                                    {data?.film?.englishName}
                                </p>
                                <p className={cx('year')}> ({premierYear})</p>
                            </span>
                            <span className={cx('meta', 'Imdh')}>
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
                                {data?.film?.imdbPoint}
                            </span>
                            <div className={cx('genres')}>
                                <div className={cx('left')}>
                                    <Link
                                        to="#"
                                        className={cx('item', 'share')}
                                    >
                                        <FacebookIcon className={cx('icon')} />
                                        Chia sẻ
                                    </Link>

                                    <div className={cx('collection')}>
                                        {option1 === false &&
                                        option2 === false ? (
                                            <Link
                                                to={
                                                    getUserName
                                                        ? routes.collection
                                                        : routes.login
                                                }
                                                className={cx('item', 'album')}
                                            >
                                                <AddOutlinedIcon
                                                    className={cx('icon')}
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
                                                    className={cx('icon-check')}
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
                                                    className={cx('icon-eye')}
                                                />
                                                <p className={cx('text')}>
                                                    Muốn xem
                                                </p>
                                            </div>
                                        )}

                                        {getUserName ? ( //Login
                                            <div
                                                className={cx('add-collection')}
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
                                                            setOption1(false)
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
                                                            setOption2(false)
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
                                </div>
                                <div className={cx('right')}>
                                    {genres.length > 0 ? (
                                        genres.map((item) => (
                                            <Link
                                                key={item.id}
                                                to="/"
                                                className={cx('item')}
                                            >
                                                {item.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <span className={cx('establish')}>
                                    <p> SÁNG LẬP</p>
                                    <div className={cx('founder-name')}>
                                        <Link to="#">Craig Mazin,</Link>

                                        <Link to="#">Druckmann</Link>
                                    </div>
                                </span>
                                <span className={cx('country')}>
                                    <p> QUỐC GIA</p>
                                    <Link to="#">Mỹ</Link>
                                </span>
                                <span className={cx('premiere')}>
                                    <p>KHỞI CHIẾU</p>
                                    <p className={cx('time')}>8/01/2022</p>
                                </span>
                            </div>
                            <div className={cx('description')}>
                                {data?.film?.description}
                            </div>
                            {people.length > 0 ? (
                                <div className={cx('cast')}>
                                    <span className={cx('intro')}>
                                        <p className={cx('header')}>
                                            DIỄN VIÊN
                                        </p>
                                        <p className={cx('icon')}>
                                            <KeyboardArrowLeftIcon
                                                className={
                                                    temp <= value
                                                        ? cx('none')
                                                        : number === 0 //(cast.length > 6 and if(number = 0, true) -> disable)
                                                        ? cx(
                                                              'disable',
                                                              'icon-left',
                                                          )
                                                        : cx('icon-left')
                                                }
                                                onClick={() => {
                                                    if (number > 0)
                                                        handlePrev();
                                                }}
                                            />
                                            <KeyboardArrowRightIcon
                                                className={
                                                    temp <= value
                                                        ? cx('none')
                                                        : number + value >= temp
                                                        ? cx(
                                                              'disable',
                                                              'icon-right',
                                                          )
                                                        : cx('icon-right')
                                                }
                                                onClick={() => {
                                                    if (number + value < temp)
                                                        handleNext();
                                                }}
                                            />
                                        </p>
                                    </span>
                                    <div
                                        className={cx(
                                            'list',
                                            'animate__animated',
                                            'animate__slideInRight',
                                        )}
                                        key={number}
                                        //-> array add new element -> add animation
                                    >
                                        {array.map((item, key) => (
                                            <div
                                                key={key}
                                                className={cx('item')}
                                            >
                                                <Link
                                                    to={routes.casts.replace(
                                                        ':id',
                                                        item.id,
                                                    )}
                                                    className={cx('person')}
                                                >
                                                    <figure>
                                                        <Image
                                                            src={
                                                                item
                                                                    ?.PersonImages[0]
                                                                    ?.url
                                                                    ? `${config.urlAPI}${item.PersonImages[0].url}`
                                                                    : 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg'
                                                            }
                                                            alt={item.name}
                                                            className={cx(
                                                                'image',
                                                            )}
                                                        />
                                                    </figure>
                                                </Link>
                                                <span>
                                                    <Link
                                                        to={routes.casts.replace(
                                                            ':id',
                                                            item.id,
                                                        )}
                                                        className={cx('name')}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <p
                                                        className={cx(
                                                            'character',
                                                        )}
                                                    ></p>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div> </div>
                            )}

                            {trailer.length > 0 ? (
                                <div className={cx('trailer')}>
                                    <span className={cx('intro')}>
                                        <p className={cx('header')}> TRAILER</p>
                                        <p className={cx('icon')}>
                                            <KeyboardArrowLeftIcon
                                                className={
                                                    trailer.length <= valueofT
                                                        ? cx('none')
                                                        : index === 0
                                                        ? cx(
                                                              'disable',
                                                              'icon-left',
                                                          )
                                                        : cx('icon-left')
                                                }
                                                onClick={() => {
                                                    if (index > 0)
                                                        handleTrailerPrev();
                                                }}
                                            />
                                            <KeyboardArrowRightIcon
                                                className={
                                                    trailer.length <= valueofT
                                                        ? cx('none')
                                                        : index + valueofT >=
                                                          trailer.length
                                                        ? cx(
                                                              'disable',
                                                              'icon-right',
                                                          )
                                                        : cx('icon-right')
                                                }
                                                onClick={() => {
                                                    if (
                                                        index + valueofT <
                                                        trailer.length
                                                    )
                                                        handleTrailerNext();
                                                }}
                                            />
                                        </p>
                                    </span>
                                    <div
                                        className={cx(
                                            'list-trailer',
                                            'animate__animated',
                                            'animate__slideInRight',
                                        )}
                                        key={index}
                                        //index thay doi -> array2 add new element -> add animation
                                    >
                                        {array2.map((item, index) => (
                                            <div
                                                key={index}
                                                className={cx('item-trailer')}
                                            >
                                                <div className={cx('clip')}>
                                                    <iframe
                                                        width="100%"
                                                        height="150"
                                                        src={item.url}
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div> </div>
                            )}
                            {listFilmSuggest ? (
                                <FoundSimilar data={listFilmSuggest} />
                            ) : (
                                <Season />
                            )}
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

export default MovieDetails;
