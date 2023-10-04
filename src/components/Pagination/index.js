import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, limit, totalItems } = pagination;
  const totalPages = Math.ceil(totalItems / limit);
  const [numbers, setNumbers] = useState([]);
  const [active, setActive] = useState(page ? page : 1);
  useEffect(() => {
    const newNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  }, [totalPages]);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
      setActive(newPage);
    }
  }
  return (
    <div className={cx('wrapper')}>
      <button
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
        className={cx('btn')}
      >
        Prev
      </button>
      <ul className={cx('page-list')}>
        {numbers.map((number) => (
          <li
            key={number}
            className={cx(
              'number',
              number === parseInt(active) ? 'active' : ''
            )}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </li>
        ))}
      </ul>

      <button
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
        className={cx('btn')}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
