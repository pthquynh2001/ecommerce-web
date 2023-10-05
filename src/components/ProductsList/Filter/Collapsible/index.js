import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../Filter.module.scss';
const cx = classNames.bind(styles);

const Collapsible = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('collapsible')}>
      <button onClick={toggleCollapsible} className={cx('collapsible-btn')}>
        <i className={cx('minus')}>
          <FontAwesomeIcon icon={faMinus} />
        </i>
        <i className={cx('plus')}>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
      <ul className={cx('collapsible-list', isOpen && 'open')}>{children}</ul>
    </div>
  );
};

export default Collapsible;
