import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/HeaderDefault';
import Footer from '../components/Footer/Footer';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('content')}>{children}</main>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
