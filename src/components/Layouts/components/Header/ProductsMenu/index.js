import React from 'react';
import styles from './ProductsMenu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const ProductsMenu = ({ state }) => {
  return (
    <div className={cx('wrapper', `${state}`)}>
      <div className={cx('inner')}>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/'}>Featured</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>New products</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Trending products</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Barbie collection</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Halloween collection</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/'}>Bath</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Bath Bombs</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Bubble Bars</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Bath Oils</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/'}>Shower</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Shower Gels and Jellies</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Shower Moisturisers</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Solid Soaps</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Body Scrubs</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/'}>Hair</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Shampoos</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Conditioners</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Treatments</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/'}>Styling</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsMenu;
