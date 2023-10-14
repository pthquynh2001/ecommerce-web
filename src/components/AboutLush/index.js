import React from 'react';
import classNames from 'classnames/bind';
import styles from './AboutLush.module.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import AboutSlider from './AboutSlider';

const cx = classNames.bind(styles);

const AboutLush = () => {
  return (
    <div className={cx('wrapper')}>
      <Link to='/' className={cx('logo')}>
        <Logo />
      </Link>
      <div className={cx('left')}>
        <div className={cx('inner', 'sticky-block')}>
          <p className={cx('small-caps')}>WHO WE ARE</p>
          <h1 className={cx('title', 'text')}>
            Hello gorgeous… welcome to the wonderful world of Lush
          </h1>
        </div>
      </div>

      <div className={cx('right')}>
        <div className={cx('module')}>
          <img
            src='https://res.cloudinary.com/dencxhraw/image/upload/v1697109300/lush-image/about-lush/Lush%20Co-Founders.jpg'
            alt='Lush Co-Founder Members'
            className={cx('img')}
          />
        </div>
        <div className={cx('module')}>
          <div className={cx('inner')}>
            <p className={cx('small-caps')}>IN THE BEGINNING…</p>
            <p className={cx('text')}>
              Lush was founded in 1995 by six co-founders; Mo Constantine, Mark
              Constantine, Rowena Bird, Helen Ambrosen, Liz Bennett and Paul
              Greeves.
            </p>
            <p className={cx('text')}>
              Emerging from the demise of a previous mail order business called
              Cosmetics To Go – a massive success that collapsed through a
              combination of over-trading and flooding – it was the same team
              that created and inspired this new venture called Lush.
            </p>
            <p className={cx('text')}>
              Lush is 10% Employee Owned and our people are the heart and soul
              of our business…
            </p>
          </div>
        </div>
        <div className={cx('module', 'black')}>
          <AboutSlider />
        </div>
        <div className={cx('module')}></div>
      </div>
    </div>
  );
};

export default AboutLush;
