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
            <Link to={'/collections/featured'}>Featured</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/featured'}>New products</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/featured'}>Trending products</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/featured'}>Barbie collection</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/featured'}>Halloween collection</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/collections/bath'}>Bath</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/bath'}>Bath Bombs</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/bath'}>Bubble Bars</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/bath'}>Bath Oils</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/collections/shower'}>Shower</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/shower'}>Shower Gels and Jellies</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/shower'}>Shower Moisturisers</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/shower'}>Solid Soaps</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/shower'}>Body Scrubs</Link>
          </li>
        </ul>
        <ul className={cx('category', 'featured')}>
          <li className={cx('title')}>
            <Link to={'/collections/hair'}>Hair</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/hair'}>Shampoos</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/hair'}>Conditioners</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/hair'}>Treatments</Link>
          </li>
          <li className={cx('sub-category')}>
            <Link to={'/collections/hair'}>Styling</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsMenu;
