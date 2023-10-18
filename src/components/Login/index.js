import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          <div className={cx('col', 'l-6', 'left')}>
            <h1 className={cx('title')}>Login</h1>
          </div>
          <div className={cx('col', 'l-6', 'right')}>
            <form action=''>
              <input type='email' required placeholder='Email' />
              <input type='password' required placeholder='Password' />
              <p className={cx('captcha')}>
                This site is protected by reCAPTCHA and the Google{' '}
                <a href='https://policies.google.com/privacy'>Privacy Policy</a>{' '}
                and{' '}
                <a href='https://policies.google.com/terms'>Terms of Service</a>{' '}
                apply.
              </p>
              <p className={cx('req-pwd')}>Forgot your password?</p>
              <button className={cx('btn', 'login-btn')}>
                <p className={cx('btn-text', 'login-btn-text')}>Login</p>
              </button>
            </form>

            <button className={cx('signup-btn')}>
              <p className={cx('signup-btn-text')}>Sign Up</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
