import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import payment from '../../assets/images/payment.png';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('inner', 'grid', 'wide')}>
        <div className={cx('info')}>
          <div className={cx('subcribe')}>
            <h2 className={cx('title')}>Want more LUSH?</h2>
            <p>
              Be the first to hear about limited edition products, exclusive
              collaborations, and all things LUSH - including our secret master
              plan to create a cosmetics revolution! We won't share your
              information with any third parties and you can unsubscribe at any
              time. For more information see our{' '}
              <Link to='/'>Privacy Notice</Link> and{' '}
              <Link to='/'>Terms and Conditions</Link>.
            </p>
            <div className={cx('email-form')}>
              <input placeholder='Email' className={cx('email-input')} />
              <Link to='/' className={cx('email-send-btn')}>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
          <div className={cx('service')}>
            <h3 className={cx('title')}>Customer Service</h3>
            <p>Delivery Information</p>
            <p>Delivery Pass</p>
            <p>Returns and Refunds</p>
            <p>Privacy</p>
            <p>Notice Cookie</p>
            <p>Policy FAQs</p>
            <p>SpongBob Musical Competition Terms</p>
            <p>Terms & Conditions</p>
            <p>Articles Hub</p>
            <p>Klarna FAQs</p>
            <p>Contact Us</p>
            <p>Sale Terms & Conditions</p>
            <p>Shop Finder</p>
            <p>Cookie Preferences</p>
          </div>

          <div className={cx('about-us')}>
            <h3 className={cx('title')}>We Are Lush</h3>
            <p>Who we are</p> <p>What we stand for</p> <p>We Are Digital</p>
            <p>Our impact</p>
            <p>Our Charitable Giving</p> <p>Modern Slavery Statement</p>
            <p>Careers</p> <p>Retail Careers</p>
            <p>Press Room</p> <p>Freshness Policy</p> <p>Our Policies</p>
            <p>Privacy Notice for Employees, Workers and Contractors</p>
          </div>
        </div>
        <div className={cx('payment')}>
          <img
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            src={payment}
            alt='Payment'
            className={cx('payment-img')}
          />
        </div>
      </div>
      <div className={cx('full-inner', 'grid')}>
        <div className={cx('copy-right', 'grid', 'wide')}>
          <div className={cx('copy-right-text')}>
            Copyright © 1995–2023 Lush Retail Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
