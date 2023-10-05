import styles from './Card.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Card = ({ item }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        {/* <Link to={'/'} className={cx('wishlist')}> */}
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* </Link> */}
        <Link to={`/product/${item.id}`} className={cx('img-link')}>
          <img
            className={cx('main-img')}
            src={item.mainImg}
            alt='product-img'
          />
          <img
            className={cx('second-img')}
            src={item.secondImg}
            alt='product-img'
          />
        </Link>

        <div className={cx('cart', 'btn')}>
          <div className={cx('cart-text', 'btn-text')}>
            Add to cart <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
      <div className={cx('body')}>
        <Link to={`/product/${item.id}`} className={cx('name-link')}>
          <h3 className={cx('name')}>{item.name}</h3>
        </Link>

        <div className={cx('type', 'text')}>{item.type}</div>
        <div className={cx('tagline', 'text')}>{item.tagline}</div>
        <p className={cx('price')}>${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
