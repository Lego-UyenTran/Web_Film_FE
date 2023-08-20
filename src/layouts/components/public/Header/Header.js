//--LIBRARY--
import classNames from 'classnames/bind';
import './14_LIBRARY.css';
import './Responsive.css';
//Components - Icons
import styles from './Header.module.scss';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';

const cx = classNames.bind(styles);

function Header({
    listCategory,
    listGender,
    listCountry,
    handleClick,
    isList,
    selectValue,
}) {
    const getSelectValueCategory = () => {
        const selectedValueCategory =
            document.getElementById('list-category').value;
        let nameCategory = document
            .getElementById('list-category')
            .getAttribute('name');
        let obj = {};
        if (selectedValueCategory !== '-1')
            obj[nameCategory] = selectedValueCategory;
        else delete obj[nameCategory];
        selectValue(obj);
    };

    const getSelectValueGenre = () => {
        const selectedValueGenre = document.getElementById('list-genre').value;
        let nameGenre = document
            .getElementById('list-genre')
            .getAttribute('name');
        let obj = {};
        if (selectedValueGenre !== '-1') obj[nameGenre] = selectedValueGenre;
        else delete obj[nameGenre];
        selectValue(obj);
    };

    const getSelectValueCountry = () => {
        const selectedValueCountry =
            document.getElementById('list-country').value;
        let nameCountry = document
            .getElementById('list-country')
            .getAttribute('name');
        let obj = {};
        if (selectedValueCountry !== '-1')
            obj[nameCountry] = selectedValueCountry;
        else delete obj[nameCountry];
        selectValue(obj);
    };

    const getSelectValueYear = () => {
        const selectedValueYear = document.getElementById('year').value;
        let nameYear = document.getElementById('year').getAttribute('name');
        let obj = {};
        if (selectedValueYear !== '-1') obj[nameYear] = selectedValueYear;
        else delete obj[nameYear];
        selectValue(obj);
    };

    const getSelectValueTime = () => {
        const selectedValueTime = document.getElementById('time').value;
        let timeStart, timeEnd;
        switch (selectedValueTime) {
            case '0-30':
                timeStart = 0;
                timeEnd = 30;
                break;
            case '30-60':
                timeStart = 30;
                timeEnd = 60;
                break;
            case '60-90':
                timeStart = 60;
                timeEnd = 90;
                break;
            case '90-120':
                timeStart = 90;
                timeEnd = 120;
                break;
            case '120-150':
                timeStart = 120;
                timeEnd = 150;
                break;
            case '150-180':
                timeStart = 150;
                timeEnd = 180;
                break;
            case '180-0':
                timeStart = 180;
                timeEnd = 9999;
                break;
            default:
                break;
        }
        let obj = { timeStart, timeEnd };
        selectValue(obj);
    };

    const getSelectValueSorted = () => {
        const selectedValueSorted = document.getElementById('order').value;
        let nameSort = document.getElementById('order').getAttribute('name');
        let obj = {};
        if (selectedValueSorted !== '-1') obj[nameSort] = selectedValueSorted;
        else delete obj[nameSort];
        selectValue(obj);
    };

    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row', 'block')}>
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div name="type" className={cx('control')}>
                        <select
                            id="list-category"
                            className={cx('list')}
                            name="categoryId"
                            onChange={getSelectValueCategory}
                        >
                            <option value={-1} className={cx('item')}>
                                -- Tất cả --
                            </option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.id} //string
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Thể loại</label>
                    <div className={cx('control')}>
                        <select
                            id="list-genre"
                            name="genreId"
                            className={cx('list')}
                            onChange={getSelectValueGenre}
                        >
                            <option value={-1} className={cx('item')}>
                                -- Tất cả --
                            </option>
                            {listGender.map((item, index) => (
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
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Quốc gia</label>
                    <div className={cx('control')}>
                        <select
                            id="list-country"
                            name="countryId"
                            className={cx('list')}
                            onChange={getSelectValueCountry}
                        >
                            <option value={-1} className={cx('item')}>
                                -- Tất cả --
                            </option>
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
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Năm</label>
                    <div className={cx('control')}>
                        <select
                            id="year"
                            name="year"
                            className={cx('list')}
                            onChange={getSelectValueYear}
                        >
                            <option value={-1} className={cx('item')}>
                                -- Tất cả --
                            </option>
                            <option value="2023" className={cx('item')}>
                                2023
                            </option>
                            <option value="2022" className={cx('item')}>
                                2022
                            </option>
                            <option value="2021" className={cx('item')}>
                                2021
                            </option>
                            <option value="2022" className={cx('item')}>
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
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Thời lượng</label>
                    <div className={cx('control')}>
                        <select
                            id="time"
                            name="time"
                            className={cx('list')}
                            onChange={getSelectValueTime}
                        >
                            <option value={-1} className={cx('item')}>
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
                <div className={cx('column', 'l-2', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Sắp xếp</label>
                    <div className={cx('control')}>
                        <select
                            id="order"
                            name="order"
                            className={cx('list')}
                            onChange={getSelectValueSorted}
                        >
                            <option value="updated" className={cx('item')}>
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

                <div className={cx('display', 'column')}>
                    <p>Hiển thị</p>
                    <div className={cx('field')}>
                        <button
                            className={
                                isList ? cx('list') : cx('list', 'disable')
                            }
                            onClick={() => handleClick(true)}
                        >
                            <ListIcon className={cx('icon')} />
                        </button>
                        <button
                            className={
                                !isList ? cx('app') : cx('app', 'disable')
                            }
                            onClick={() => handleClick(false)}
                        >
                            <AppsIcon className={cx('icon-app')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
