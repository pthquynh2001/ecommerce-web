import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to='/' className={cx('logo')}>
          <img src={logo} alt='LOGO' className={cx('logo-img')} />
        </Link>
        <ul className={cx('navbar')}>
          <li className={cx('nav-item')}>
            <Link to='/bath-products'>Bath Products</Link>
          </li>
          <li className={cx('nav-item')}>
            <Link to='/shower-products'>Shower Products</Link>
          </li>
          <li className={cx('nav-item')}>
            <Link to='/hair-care'>Hair Care</Link>
          </li>
        </ul>
        <div className={cx('btns-list')}>
          <input className={cx('search-input')} placeholder='Searching...' />
          <div className={cx('search-btn', 'btn')}>
            <Link to='/' className={cx('user')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>
          <div className={cx('btn')}>
            <Link to='/' className={cx('user')}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className={cx('btn')}>
            <Link to='/' className={cx('wishlist')}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
          <div className={cx('btn')}>
            <Link to='/' className={cx('cart')}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
        {/* menu*/}
        {/* search */}
        {/* cart ...*/}
      </div>
    </header>
  );
}
export default Header;
