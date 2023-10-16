import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from '../Logo';
import ProductsMenu from './ProductsMenu';
import Cart from '../Cart';
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
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const headerRef = useRef();
  useEffect(() => {
    function auto() {
      window.scrollTo(0, 0);
    }
    auto();
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      document.onscroll = function () {
        const newHeight = 88 - (window.scrollY - 200);
        if (window.scrollY > 200) {
          headerRef.current.style.height = `${newHeight}px`;
        } else {
          headerRef.current.style.height = '';
        }
      };
    }
    return () => {
      document.onscroll = null;
    };
  }, []);

  return (
    <>
      <header className={cx('wrapper')} ref={headerRef}>
        <div className={cx('inner')}>
          <Link to='/'>
            <Logo />
          </Link>
          <ul className={cx('navbar')}>
            <li
              className={cx('nav-item')}
              onMouseOver={() => {
                setOpenMenu(true);
              }}
              onMouseLeave={() => {
                setOpenMenu(false);
              }}
            >
              <Link to='/' className={cx('title')}>
                Products
              </Link>

              <ProductsMenu state={openMenu ? 'active' : 'inactive'} />
            </li>
            <li className={cx('nav-item')}>
              <Link to='/articles' className={cx('title')}>
                Articles
              </Link>
            </li>

            <li className={cx('nav-item')}>
              <Link to='/contact' className={cx('title')}>
                Contact
              </Link>
            </li>
            <li className={cx('nav-item')}>
              <Link to='/about' className={cx('title')}>
                About Us
              </Link>
            </li>
          </ul>
          <div className={cx('btns-list')}>
            <div className={cx('search-box')}>
              <input
                className={cx('search-input')}
                placeholder='Searching...'
              />
              <Link to='/' className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>

            <div className={cx('nav-btn')}>
              <Link to='/account/login' className={cx('user')}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <div className={cx('nav-btn')}>
              <Link to='/' className={cx('wishlist')}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
            <div
              className={cx('nav-btn')}
              onClick={() => setOpenCart(!openCart)}
            >
              <div className={cx('cart')}>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {openCart && <Cart state={'open'}></Cart>}
    </>
  );
}
export default Header;
