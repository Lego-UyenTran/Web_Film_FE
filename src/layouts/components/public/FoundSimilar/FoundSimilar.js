import { useState, useEffect } from 'react';
import React from 'react';
import classNames from 'classnames/bind';
import 'animate.css';
//Components
import styles from './FoundSimilar.module.scss';
import Image from '../../../../components/image/Images';
//Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import config from '../../../../config';
import routes from '../../../../config/routes';

const cx = classNames.bind(styles);

function FoundSimilar({ data }) {
    // eslint-disable-next-line no-undef

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
    const isES = viewPort.width <= 576; //2
    const isStoXL = viewPort.width > 576 && viewPort.width <= 1024; // 4
    const isXL = viewPort.width > 1024 && viewPort.width <= 1200; // 5
    const isXXl = viewPort.width > 1200;
    const [value, setValue] = useState(() => {
        let temp;
        if (isES) temp = 2;
        else if (!isES && isStoXL) temp = 3;
        else if (!isStoXL && isXL) temp = 4;
        else temp = 5;
        return temp;
    });

    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    useEffect(() => {
        if (data) {
            setArray(data.slice(number, value));
            setDataLength(data.length);
        }
    }, [data]);

    // setItem for array
    useEffect(() => {
        if (isES && value !== 2) {
            setArray(data.slice(0, 2));
            setNumber(0);
            setValue(2);
        } else if (!isES && isStoXL && value !== 3) {
            setArray(data.slice(0, 3));
            setNumber(0);
            setValue(3);
        } else if (!isStoXL && isXL && value !== 4) {
            setArray(data.slice(0, 4));
            setNumber(0);
            setValue(4);
        } else if (!isXL && isXXl && value !== 5) {
            setArray(data.slice(0, 5));
            setNumber(0);
            setValue(5);
        }
    }, [viewPort.width]);

    //handle Click Next
    const handleNext = () => {
        const nowIndex = number + value;
        setNumber(nowIndex);
        nowIndex + value <= dataLength
            ? setArray(data.slice(nowIndex, nowIndex + value))
            : setArray(data.slice(nowIndex, dataLength));
    };

    //hanle Click Prev
    const handlePrev = () => {
        const nowIndex = number - value;
        setNumber(nowIndex);
        setArray(data.slice(nowIndex, number));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <span className={cx('intro')}>
                    <h3 className={cx('title')}>PHIM TƯƠNG TỰ</h3>
                    <div className={cx('button')}>
                        <p className={cx('icon')}>
                            <KeyboardArrowLeftIcon
                                className={
                                    dataLength <= value
                                        ? cx('none')
                                        : number === 0 //(cast.length > 6 and if(number = 0, dk dung) -> disable)
                                        ? cx('disable', 'icon-left')
                                        : cx('icon-left')
                                }
                                onClick={() => {
                                    if (number > 0) handlePrev();
                                }}
                            />
                            <KeyboardArrowRightIcon
                                className={
                                    dataLength <= value
                                        ? cx('none')
                                        : number + value >= dataLength
                                        ? cx('disable', 'icon-right')
                                        : cx('icon-right')
                                }
                                onClick={() => {
                                    if (number + value < dataLength)
                                        handleNext();
                                }}
                            />
                        </p>
                    </div>
                </span>

                <ul
                    className={cx(
                        'list',
                        'animate__animated',
                        'animate__slideInRight',
                    )}
                    key={number}
                >
                    {array.map((item) => (
                        <li key={item.id} className={cx('item')}>
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
                                <p className={cx('name')}>{item.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FoundSimilar;
