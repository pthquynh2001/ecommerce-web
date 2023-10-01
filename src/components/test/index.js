import React from 'react';
import styles from './TestComponent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TestComponent = () => {
  return (
    <div className={cx('wrapper')}>
      <button className={cx('btn')}>
        <p className={cx('btn-text')}>Test</p>
      </button>
    </div>
  );
};

export default TestComponent;
