import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Components;
import authApi from '../../api/authApi';
import routes from '../../config/routes';
import styles from './Login.module.scss';
//Icons
import GoogleIcon from '@mui/icons-material/Google';
const cx = classNames.bind(styles);
function Login() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    let navigate = useNavigate('account');
    const getUserEmail = localStorage.getItem('account');

    const hanleClickLogin = () => {
        if (userName === '' || passWord === '') {
            alert('Điền đầy đủ thông tin đăng nhập.');
            return;
        }

        const login = async () => {
            try {
                const params = { username: userName, password: passWord };

                const response = await authApi.login(params);
                const err = response.data.error;
                if (!err) {
                    localStorage.setItem(
                        'account',
                        JSON.stringify({
                            userEmail: getUserEmail,
                            accessToken: response.data.accessToken,
                            username: userName,
                        }),
                    );
                    return navigate('/');
                }
            } catch (error) {
                alert('Thông tin đăng nhập không hợp lệ!');
                return;
            }
        };
        login();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('block')}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                <div className={cx('box')}>
                    <div className={cx('field')}>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            className={cx('userName')}
                            placeholder="Ten dang nhap"
                        />
                    </div>
                    <div className={cx('field')}>
                        <input
                            type="password"
                            onChange={(e) => setPassWord(e.target.value)}
                            className={cx('password')}
                            placeholder="Mat khau"
                        />
                    </div>

                    <div className={cx('field')}>
                        <input
                            type="checkbox"
                            className={cx('checkbox')}
                            placeholder="Mat khau"
                        />
                        <p>Ghi nhớ</p>
                    </div>

                    <div className={cx('submit')}>
                        <button
                            className={cx('btn-submit')}
                            onClick={() => hanleClickLogin()}
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx('divider')} data-content="HOẶC"></div>
                    <a href={routes.account} className={cx('btn-google-login')}>
                        <GoogleIcon className={cx('icon')} />
                        Đăng nhập với Google
                    </a>
                </div>

                <p className={cx('other')}>
                    <a href={routes.register} className={cx('register')}>
                        Đăng ký
                    </a>
                    <a href="/" className={cx('forgot')}>
                        Quên mật khẩu
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
