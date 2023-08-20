import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
// --LIBRARY
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('compare')}>
                Trang cung cấp thông tin và trailer phim. Trang web mang mục
                đích học tập.
            </span>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    Trang web sử dụng các kỹ năng HTML, CSS và ReactJS.
                </li>
                <li className={cx('item')}>
                    React - A JavaScript library for building user interfaces
                </li>
                <li className={cx('item')}>
                    HTML is the markup language that we use to structure and
                    give meaning to our web content, for example defining
                    paragraphs, headings, and data tables, or embedding images
                    and videos in the page.
                </li>
                <li className={cx('item')}>
                    CSS is a language of style rules that we use to apply
                    styling to our HTML content, for example setting background
                    colors and fonts, and laying out our content in multiple
                    columns.
                </li>
                <li className={cx('item')}>
                    JavaScript is a scripting language that enables you to
                    create dynamically updating content, control multimedia,
                    animate images, and pretty much everything else. (Okay, not
                    everything, but it is amazing what you can achieve with a
                    few lines of JavaScript code.)
                </li>
            </ul>

            <div className={cx('contact')}>
                <a href="/" className={cx('icon')}>
                    <EmailOutlinedIcon className={cx('email')} />
                </a>
                <a href="/" className={cx('icon')}>
                    <FacebookRoundedIcon className={cx('fb')} />
                </a>
                <a href="/" className={cx('icon')}>
                    <TelegramIcon className={cx('telegram')} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
