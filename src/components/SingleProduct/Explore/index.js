import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const Explore = () => {
  const leftCardRef = useRef();
  const rightCardRef = useRef();
  if (leftCardRef.current && rightCardRef.current) {
    if (leftCardRef.current.clientHeight > rightCardRef.current.clientHeight) {
      rightCardRef.current.style.height = `${leftCardRef.current.clientHeight}px`;
    } else {
      leftCardRef.current.style.height = `${rightCardRef.current.clientHeight}px`;
    }
  }
  return (
    <div className={cx('wrapper', 'divider', 'grid', 'wide')}>
      <h2 className={cx('title')}>Explore</h2>
      <div className={cx('row')}>
        <div className={cx('col', 'l-6')}>
          <div className={cx('card', 'left')} ref={leftCardRef}>
            <p className={cx('card-title')}>BRING IT BACK</p>
            <p className={cx('card-text')}>
              Give me a new life! Return the packaging for this product to any a
              Lush shop and receive money towards your next purchase.
              <br />
              Give me a new life! Return the packaging for this product to any a
              Lush shop and receive money towards your next purchase.
            </p>
            <img
              className={cx('card-img')}
              src='https://www.lush.com/cdn-cgi/image/width=64,f=auto/https://unicorn.lush.com/media/file_upload/Bring-it-back%403x_3a8709dd.png'
              alt='explore-card-img'
            />
          </div>
        </div>
        <div className={cx('col', 'l-6')}>
          <div className={cx('card', 'right')} ref={rightCardRef}>
            <p className={cx('card-title')}>HANDLED WITH CARE</p>
            <p className={cx('card-text')}>
              Your order will be expertly protected by biodegradable Eco Pops,
              easily dissolvable in water or soil.
            </p>
            <img
              className={cx('card-img')}
              src='https://www.lush.com/cdn-cgi/image/width=64,f=auto/https://unicorn.lush.com/media/file_upload/Ecopops%403x_54a766a4.png'
              alt='explore-card-img'
            />
          </div>
        </div>
      </div>
      <div className={cx('disclaimer')}>
        <div className={cx('disclaimer-title')}>FIGHTING ANIMAL TESTING</div>
        <div className={cx('disclaimer-text')}>
          We have been fighting against animal testing since before we opened
          our first shop, and the fight continues today. We test products on
          humans and promote, fund and use human biology relevant testing
          methods entirely animal and animal-product free.{' '}
          <span className={cx('more-link')}>Find out more</span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
