import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import styleSeries from './HeaderSeries.module.scss';
// LIBRARY
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
const cx = classNames.bind(styles, styleSeries);

function HeaderSeries({
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
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select
                            id="list-category"
                            name="categoryID"
                            className={cx('list')}
                            onChange={getSelectValueCategory}
                        >
                            <option value={-1} className={cx('item')}>
                                -- Tất cả --
                            </option>
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
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
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
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
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
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
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
                            </option>{' '}
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
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Sắp xếp</label>
                    <div className={cx('control')}>
                        <select
                            id="order"
                            name="order"
                            className={cx('list')}
                            onChange={getSelectValueSorted}
                        >
                            <option className={cx('item')}>
                                Ngày cập nhật
                            </option>
                            <option value="movie" className={cx('item')}>
                                Ngày phát hành
                            </option>
                            <option value="movie" className={cx('item')}>
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

export default HeaderSeries;
