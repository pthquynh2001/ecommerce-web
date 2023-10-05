import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/images/logo.png';
import ProductsMenu from './ProductsMenu';
// import { getCollectionNames } from '../api/getAPIs';
// import { useState, useEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
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
  const [open, setOpen] = useState(false);
  const headerRef = useRef();
  useEffect(() => {
    function auto() {
      window.scrollTo(0, 0);
    }
    auto();
  }, []);
  useEffect(() => {
    document.onscroll = function () {
      const newHeight = 88 - (window.scrollY - 400);
      window.scrollY > 400
        ? (headerRef.current.style.height = `${newHeight}px`)
        : (headerRef.current.style.height = '');
    };
  }, []);

  return (
    <header className={cx('wrapper')} ref={headerRef}>
      <div className={cx('inner')}>
        <Link to='/' className={cx('logo')}>
          <img src={logo} alt='LOGO' className={cx('logo-img')} />
        </Link>
        <ul className={cx('navbar')}>
          <li
            className={cx('nav-item')}
            onMouseOver={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <Link to='/' className={cx('title')}>
              Products
            </Link>

            <ProductsMenu state={open ? 'active' : 'inactive'} />
          </li>
          <li className={cx('nav-item')}>
            <Link to='/' className={cx('title')}>
              Articles
            </Link>
          </li>

          <li className={cx('nav-item')}>
            <Link to='/' className={cx('title')}>
              Contact
            </Link>
          </li>
          <li className={cx('nav-item')}>
            <Link to='/' className={cx('title')}>
              About Us
            </Link>
          </li>
        </ul>
        <div className={cx('btns-list')}>
          <div className={cx('search-box')}>
            <input className={cx('search-input')} placeholder='Searching...' />
            <Link to='/' className={cx('search-btn')}>
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
      </div>
    </header>
  );
}
export default Header;
