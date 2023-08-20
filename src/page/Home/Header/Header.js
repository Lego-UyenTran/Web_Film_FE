//--LIBRARY--
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
//Components
import './14_LIBRARY.css';
import './Responsive.css';
import { object } from 'joi';

const cx = classNames.bind(styles);

function Header({ listCategory, listGender, listCountry, selectValue }) {
    const getSelectValueCategory = () => {
        var selectedValueCategory =
            document.getElementById('list-category').value;
        let nameCategory = document
            .getElementById('list-category')
            .getAttribute('name');
        const obj = {};
        obj[nameCategory] = selectedValueCategory;
        selectValue(obj);
    };

    const getSelectValueGenres = () => {
        const selectedValueCountry =
            document.getElementById('list-genre').value;
        let nameGenre = document
            .getElementById('list-genre')
            .getAttribute('name');
        let obj = {};
        obj[nameGenre] = selectedValueCountry;
        selectValue(obj);
    };

    const getSelectValueCountry = () => {
        const selectedValueCountry =
            document.getElementById('list-country').value;
        let nameCountry = document
            .getElementById('list-country')
            .getAttribute('name');
        let obj = {};
        obj[nameCountry] = selectedValueCountry;
        selectValue(obj);
    };

    const getSelectValueYear = () => {
        const selectedValueYear = document.getElementById('year').value;
        let nameYear = document.getElementById('year').getAttribute('name');
        let obj = {};
        obj[nameYear] = selectedValueYear;
        selectValue(obj);
    };

    const getSelectValueTime = () => {
        const selectedValueTime = document.getElementById('time').value;
        let nameTime = document.getElementById('time').getAttribute('name');
        let obj = {};
        obj[nameTime] = selectedValueTime;
        selectValue(obj);
    };

    const getSelectValueSorted = () => {
        const selectedValueSorted = document.getElementById('order').value;
        let nameSort = document.getElementById('order').getAttribute('name');
        let obj = {};
        obj[nameSort] = selectedValueSorted;
        selectValue(obj);
    };

    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row', 'block')}>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select
                            id="list-category"
                            onChange={getSelectValueCategory}
                            className={cx('list')}
                            name="categoryId"
                        >
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.id}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Thể loại</label>
                    <div className={cx('control')}>
                        <select
                            id="list-genre"
                            className={cx('list')}
                            onChange={getSelectValueGenres}
                        >
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listGender.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.name}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Quốc gia</label>
                    <div className={cx('control')}>
                        <select
                            id="list-country"
                            className={cx('list')}
                            onChange={getSelectValueCountry}
                        >
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCountry.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.id}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Năm</label>
                    <div className={cx('control')}>
                        <select
                            id="year"
                            name="year"
                            className={cx('list')}
                            onChange={getSelectValueYear}
                        >
                            <option className={cx('item')}>-- Tất cả --</option>
                            <option value="2023" className={cx('item')}>
                                2023
                            </option>
                            <option value="2022" className={cx('item')}>
                                2022
                            </option>
                            <option value="2021" className={cx('item')}>
                                2021
                            </option>
                            <option value="2020" className={cx('item')}>
                                2020
                            </option>
                            <option value="2019" className={cx('item')}>
                                2019
                            </option>
                            <option value="2018" className={cx('item')}>
                                2018
                            </option>
                            <option value="2017" className={cx('item')}>
                                2017
                            </option>
                            <option value="2016" className={cx('item')}>
                                2016
                            </option>
                            <option value="2015" className={cx('item')}>
                                2015
                            </option>
                            <option value="before-2015" className={cx('item')}>
                                Trước 2015
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Thời lượng</label>
                    <div className={cx('control')}>
                        <select
                            id="time"
                            name="time"
                            className={cx('list')}
                            onChange={getSelectValueTime}
                        >
                            <option value="" className={cx('item')}>
                                -- Tất cả --
                            </option>
                            <option value="0-30" className={cx('item')}>
                                Dưới 30 phút
                            </option>
                            <option value="30-60" className={cx('item')}>
                                30' - 1 tiếng
                            </option>
                            <option value="60-90" className={cx('item')}>
                                1 - 1.5 tiếng
                            </option>
                            <option value="90-120" className={cx('item')}>
                                1.5 - 2 tiếng
                            </option>
                            <option value="120-150" className={cx('item')}>
                                2 - 2.5 tiếng
                            </option>
                            <option value="150-180" className={cx('item')}>
                                2.5 - 3 tiếng
                            </option>
                            <option value="180-0" className={cx('item')}>
                                Trên 3 tiếng
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Sắp xếp</label>
                    <div className={cx('control')}>
                        <select
                            id="order"
                            name="order"
                            onChange={getSelectValueSorted}
                            className={cx('list')}
                        >
                            <option value="rating" className={cx('item')}>
                                Ngày cập nhật
                            </option>
                            <option value="publishDate" className={cx('item')}>
                                Ngày phát hành
                            </option>
                            <option value="rating" className={cx('item')}>
                                Điểm đánh giá
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
