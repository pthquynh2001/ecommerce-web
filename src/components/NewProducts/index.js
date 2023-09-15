import React from 'react';
import classNames from 'classnames';
import styles from './NewProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NewProducts() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('arrow-btn')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={cx('arrow-btn')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
