import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { getCategoryImgs } from '../api/imageAPIs';

const cx = classNames.bind(styles);

const Categories = () => {
  const [categoryImages, setCategoryImages] = useState([]);

  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryImgs();
      setCategoryImages(data);
    };
    fetchData();
  }, []);
  // END fetch API

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2 className={cx('title')}>Categories</h2>
        <div className={cx('container')}>
          {categoryImages.map((img) => (
            <Link
              to={`/collections/${img.cat}`}
              className={cx('type')}
              key={img.id}
            >
              <div className={cx('category-btn')}>
                <div className={cx('name')} key={img.id}>
                  {img.type}
                </div>
              </div>

              <img src={img.url} alt='category-img' key={img.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
