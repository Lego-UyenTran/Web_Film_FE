import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import GoogleIcon from '@mui/icons-material/Google';
import routes from '../../config/routes';
///register
import authApi from '../../api/authApi';

const cx = classNames.bind(styles);
function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const Joi = require('joi');
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),

        Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),

        repeat_password: Joi.ref('password'),

        Email: Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] },
        }),
    });

    const checkValue = schema.validate({
        Email: email,
        username: name,
        Password: password,
    });
    const temp = checkValue.error?.toString();
    const hanleClickLogin = () => {
        if (email === '' || name === '' || password === '') {
            alert('Hãy điền đầy đủ thông tin đăng ký');
            return;
        }
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //check email validity
        if (!regex.test(email)) {
            alert('Hãy điền địa chỉ email hợp lệ!');
            return;
        }
        if (temp?.includes('username')) {
            alert(
                'Tên đăng kí phải trên 3 kí tự và phải không chứa các kí tự đặc biệt!',
            );
            return;
        }
        if (temp?.includes('Password')) {
            alert('Mật khẩu phải trên 8 kí tự và không có ký tự đặc biệt!');
            return;
        }
        const register = async () => {
            try {
                const params = { email, username: name, password };
                const response = await authApi.register(params);
                const err = response.data.error;

                if (!err) {
                    //save email: register
                    localStorage.setItem(
                        'account',
                        JSON.stringify({
                            email,
                        }),
                    );
                    return navigate('/login');
                }
            } catch (error) {
                console.log(error);
                alert('Thông tin đăng ký không hợp lệ!', error);
            }
        };
        register();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('block')}>
                <h2 className={cx('title')}>Đăng ký</h2>
                <div className={cx('box')}>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            autoFocus
                            className={cx('email')}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            required
                            placeholder="Email"
                            type="email"
                        />
                    </form>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            className={cx('name')}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ten"
                            required
                            type="text"
                        />
                    </form>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            className={cx('password')}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mat khau"
                            required
                            type="password"
                        />
                    </form>

                    <div className={cx('field')}>
                        <input type="checkbox" className={cx('checkbox')} />
                        <p>Đăng ký nhận thông báo về trang web</p>
                    </div>

                    <div className={cx('submit')}>
                        <button
                            className={cx('btn-submit')}
                            onClick={() => hanleClickLogin()}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className={cx('divider')} data-content="HOẶC"></div>
                    <a href={routes.account} className={cx('btn-google-login')}>
                        <GoogleIcon className={cx('icon')} />
                        Đăng nhập với Google
                    </a>
                </div>

                <p className={cx('other')}>
                    <a href={routes.login} className={cx('register')}>
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
