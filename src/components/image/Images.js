import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    //lay tat ca props ben ngoai
    return (
        <img
            className={classNames(styles.wrapper, className)} //1.
            src={src}
            ref={ref}
            alt={alt}
            {...props}
        />
    ); //dua vao trong;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
