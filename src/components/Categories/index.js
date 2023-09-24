import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';

const cx = classNames.bind(styles);

const Categories = () => {
  const [categoryImages, setCategoryImages] = useState([]);

  // fetch API
  useEffect(() => {
    fetch('https://650e1033a8b42265ec2ceca1.mockapi.io/api/category')
      .then((response) => response.json())
      .then((data) => setCategoryImages(data))
      .catch((err) => console.log(err));
  }, []);
  // END fetch API

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2 className={cx('title')}>Categories</h2>
        <div className={cx('container')}>
          {categoryImages.map((img) => (
            <Link
              to={`/category/${img.type.toLowerCase().replace(' ', '-')}`}
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
