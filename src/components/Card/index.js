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
      <Link to={`/product/${item.id}`} className={cx('link')}>
        <div className={cx('header')}>
          {/* <Link to={'/'} className={cx('wishlist')}> */}
          {/* <FontAwesomeIcon icon={faHeart} /> */}
          {/* </Link> */}
          <div className={cx('img')}>
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
          </div>
          <div className={cx('cart')}>
            <div className={cx('cart-text')}>
              Add to cart <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div>
        <div className={cx('body')}>
          <h2 className={cx('name')}>{item.name}</h2>
          <div className={cx('type', 'text')}>{item.type}</div>
          <div className={cx('tagline', 'text')}>{item.tagline}</div>
          <div className={cx('price-size', 'text')}>
            <div className={cx('price')}>{item.price} VND</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
