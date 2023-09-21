import styles from './Card.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const Card = ({ item }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Link to={'/'} className={cx('wishlist')}>
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <div className={cx('badge')}>{item.badgeId}</div>
        <div className={cx('img')}>
          <Link to={`/product/${item.id}`} className={cx('link')}>
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
        </div>
      </div>
      <div className={cx('body')}>
        <div className={cx('review', 'text')}>no review yet</div>
        <div className={cx('type', 'text')}>{item.type}</div>
        <Link to={`/product/${item.id}`} className={cx('link')}>
          <h2 className={cx('name')}>{item.name}</h2>
        </Link>
        <div className={cx('tagline', 'text')}>{item.tagline}</div>
        <div className={cx('price-size', 'text')}>
          <span className={cx('price')}>{item.price} VND</span> /{' '}
          <span className={cx('size')}>{item.size} ml</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
