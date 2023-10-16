import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          <div className={cx('col', 'l-6')}>
            <h2 className={cx('title')}>Login</h2>
          </div>
          <div className={cx('col', 'l-6')}>
            <input type='text' />
            <input type='password' />
            <button className={cx('btn')}>
              <p className={cx('btn-text')}>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
