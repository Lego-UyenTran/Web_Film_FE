import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import accountsPageApi from '../../../api/accountsInfoApi';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    const account = localStorage.getItem('account');
    const { username, accessToken } = JSON.parse(account);
    const [email, setEmail] = useState('');
    const [date, setDate] = useState();

    useEffect(() => {
        const fetchAccountsInfoApi = async (accessToken) => {
            try {
                const response = await accountsPageApi.getAll(accessToken);
                setEmail(response.data.email);
                const resDate = new Date(response.data.createdAt);
                setDate(
                    `${resDate?.getDate()}/${
                        resDate?.getMonth() + 1
                    }/${resDate?.getFullYear()} ${
                        resDate?.getHours() < 10
                            ? '0' + resDate?.getHours()
                            : resDate?.getHours()
                    }:${
                        resDate?.getMinutes() < 10
                            ? '0' + resDate?.getMinutes()
                            : resDate?.getMinutes()
                    }`,
                );
            } catch (error) {
                console.log('Error: ', error);
            }
        };
        fetchAccountsInfoApi(accessToken);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('username')}>{username}</h2>
                <div className={cx('info')}>
                    <div className={cx('date-joined')}>
                        Ngày gia nhập:
                        <p className={cx('date')}>{date ?? ''}</p>
                    </div>
                    <div className={cx('field-email')}>
                        <span className={cx('email')}>
                            Email: <p>{email ?? ''}</p>
                        </span>
                        <span className={cx('settings-email')}>
                            <a href="#" className={cx('change-email')}>
                                Đổi email
                            </a>
                            <a href="#" className={cx('change-password')}>
                                Đổi mật khẩu
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('field')}>
                    <label className={cx('checkbox')}>
                        <input type="checkbox" name="censorSubtitle"></input>
                        <a href="#">Bật chế độ kiểm duyệt phụ đề</a>
                    </label>
                    <div className={cx('help')}>
                        Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay
                        bằng ký tự lạ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
