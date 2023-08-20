import { useEffect, useState } from 'react';
import React from 'react';
import WebFont from 'webfontloader';
import classNames from 'classnames/bind';
import styles from './HeaderDefault.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
//---ICON / ANIMATION --
// import 'animate.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const cx = classNames.bind(styles);

function Header() {
    const [isScroll, setIsScroll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const getValueUser = localStorage.getItem('account');

    function hanleScroll() {
        window.addEventListener('scroll', function () {
            document.getElementById('showScroll').innerHTML =
                window.pageYOffset + 'px';
        });
    }
    // Check nếu scroll (scrollY > 66) thì set lại state
    function changeNavbarBackground() {
        if (window.scrollY >= 66) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }
    // Add event scroll
    useEffect(() => {
        changeNavbarBackground();
        window.addEventListener('scroll', changeNavbarBackground);
    });

    //Add font-family
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather', 'Zen Antique Soft'],
            },
        });
    }, []);

    //Hanle resposive
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

    //hanleClick logout
    const handleClickLogout = () => {
        localStorage.removeItem('account');
    };

    const viewPort = useViewport();
    const Mobile = viewPort.width <= 768;
    //Set navbar-menu in mobile
    useEffect(() => {
        if (Mobile) {
            setIsMobile(true); //chua toi uu
        } else {
            setIsMobile(false);
        }
    }, [viewPort.width]);

    //Click Icon menu
    let i = 0;
    const handleClickIconMenu = () => {
        if (isShow) {
            setIsShow(false);
            i = 1;
        } else {
            i = 0;
            setIsShow(true);
        }
    };

    const handleClickList = () => {};
    return (
        <header
            className={
                isScroll ? cx('wrapper', 'header-active') : cx('wrapper') // Nếu state isScroll = true thì thêm class header-active
            }
            onScroll={hanleScroll}
        >
            <div className={cx('nav-left')}>
                <div className={cx('brand')}>
                    {isMobile === true ? (
                        <p className={cx('icon')}>
                            <MenuIcon
                                className={cx('menu-icon')}
                                onClick={() => handleClickIconMenu()}
                                key={i}
                            />
                        </p>
                    ) : (
                        ''
                    )}
                    <nav className={cx('nav-brand')}>
                        <Link
                            to={routes.home}
                            className={cx('brand-link')}
                            onClick={() => {
                                setIsShow(false);
                            }}
                        >
                            <svg
                                className={cx('svg')}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 277.85 98.3"
                            >
                                <defs>
                                    <style></style>
                                </defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path d="M28.88,23c3.64,6.42,6.41,11.38,9,16.63h.44c2.77-5.83,5.25-10.36,8.89-16.63L60.67,0H75.26L45.36,47.84,76,98.3H61.25L48.71,76.57c-5.1-8.32-8.31-13.71-11.37-19.4H37C34.27,62.86,31.5,68.11,26.4,76.71L14.58,98.3H0L30,48.57,15.85,23.24" />
                                        <path d="M81.42,23.42c.17,10.25,6.72,14.48,14.31,14.48a27.33,27.33,0,0,0,11.54-2.16l1.29,5.43a33.66,33.66,0,0,1-13.87,2.59c-12.84,0-20.51-8.45-20.51-21S81.59.24,93.74.24c13.62,0,17.24,12,17.24,19.65a27.83,27.83,0,0,1-.26,3.53ZM103.65,18c.09-4.82-2-12.32-10.51-12.32-7.67,0-11,7.06-11.63,12.32Z" />
                                        <path d="M120.37,12.48c0-4.31-.08-7.85-.34-11.29l6.82,2.05L127,7.91h.26c2.32-4,6.2-7.67,13.09-7.67A12.34,12.34,0,0,1,152.17,8.6h.17A17.12,17.12,0,0,1,157,3.17,14.22,14.22,0,0,1,166.21.24c5.52,0,13.71,3.62,13.71,18.1V42.9h-7.41V19.28c0-8-2.93-12.84-9-12.84-4.31,0-7.67,3.19-9,6.9a12.28,12.28,0,0,0-.61,3.79V42.9h-7.41v-25c0-6.64-2.93-11.47-8.7-11.47-4.74,0-8.19,3.8-9.39,7.59a10.23,10.23,0,0,0-.61,3.7V42.9h-7.41Z" />
                                        <path
                                            className="cls-1"
                                            d="M88.08,52.28a70,70,0,0,1,11.54-.9c5.94,0,10.29,1.38,13.06,3.87A12.54,12.54,0,0,1,116.75,65c0,4.22-1.24,7.54-3.59,10-3.18,3.39-8.36,5.12-14.23,5.12a20.43,20.43,0,0,1-4.84-.42V98.3h-6Zm6,22.46a20.41,20.41,0,0,0,5,.48c7.26,0,11.68-3.52,11.68-10,0-6.15-4.35-9.12-11-9.12a25.72,25.72,0,0,0-5.67.48Z"
                                        />
                                        <path
                                            className="cls-1"
                                            d="M124.29,49.24l6.08,6V70.11h.14a11.22,11.22,0,0,1,4.35-4.29,12.56,12.56,0,0,1,6.22-1.72c4.49,0,11.67,2.76,11.67,14.3V98.3h-6.08V79.09c0-5.39-2-10-7.73-10a8.74,8.74,0,0,0-8.16,6.08,7.47,7.47,0,0,0-.41,2.9V98.3h-6.08Z"
                                        />
                                        <path
                                            className="cls-1"
                                            d="M169.41,55.46a3.77,3.77,0,0,1-7.53,0,3.7,3.7,0,0,1,3.8-3.8A3.61,3.61,0,0,1,169.41,55.46ZM162.64,98.3V64.86h6.08V98.3Z"
                                        />
                                        <path
                                            className="cls-1"
                                            d="M260.89,58.24c-1.83-8-1.83-12-3.66-23h-.91c-3.66,10-.62,1.22-5.15,14.78L235.29,97.71h-8.81L211.94,50.9c-4.27-13.86-7.87-26.54-10.41-38.21h-.27c-.26,12.25-.93,28.73-1.73,43.46l-2.4,42.15H186.05L192.32,0h14.81l15.35,47.54c3.74,12.11,6.8,22.9,9.07,33.11h.4c2.27-9.92,5.47-20.71,9.48-33.11L249,23.24,265.85,23l12,75.3H266.51Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </nav>
                </div>

                <Link
                    to={routes.search}
                    onClick={() => {
                        sessionStorage.removeItem('nowIndex');
                    }}
                    className={cx('search')}
                >
                    <span>
                        <SearchOutlinedIcon className={cx('search-icon')} />

                        <div className={cx('search-item')}>Tìm kiếm</div>
                    </span>
                </Link>
            </div>
            <div
                className={
                    isMobile && isShow ? cx('nav-menu') : cx('nav-menu', 'hide')
                }
            >
                <div
                    className={cx('nav-list')}
                    onClick={() => handleClickList()}
                >
                    <li className={cx('item')}>
                        <Link
                            to={routes.hotmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Hot
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.oddmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Lẻ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.seriesmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Bộ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.newmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Mới
                        </Link>
                    </li>
                </div>

                <div className={cx('nav-user')}>
                    {!getValueUser ? (
                        <div
                            className={cx('btn-user')}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            <Link to={routes.login}>Đăng nhập</Link>
                        </div>
                    ) : (
                        <div className={cx('account')}>
                            <div className={cx('navbar-account')}>
                                <p className={cx('user-name')}>
                                    {JSON.parse(getValueUser).username}
                                </p>
                                <KeyboardArrowDownIcon className={cx('icon')} />
                            </div>
                            <div className={cx('navbar-list')}>
                                <a
                                    href={routes.settings}
                                    className={cx('navbar-item')}
                                >
                                    <PersonOutlineOutlinedIcon
                                        className={cx('icon')}
                                    />
                                    <p>Tài khoản</p>
                                </a>
                                <a
                                    href={routes.collection}
                                    className={cx('navbar-item')}
                                >
                                    <svg
                                        className={cx('icon')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v296zm96-32c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
                                    </svg>

                                    <p>Bộ sưu tập</p>
                                </a>

                                <a
                                    href="/"
                                    className={cx('navbar-item')}
                                    onClick={handleClickLogout}
                                >
                                    <LogoutOutlinedIcon
                                        className={cx('icon')}
                                    />
                                    <p>Đăng xuất</p>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
