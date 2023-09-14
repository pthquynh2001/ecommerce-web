import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const data = [
  'https://res.cloudinary.com/lush/image/upload/v1694424116/collections/Hero%20Images/Sleepy_Bubble_Bar.jpg',
  'https://res.cloudinary.com/lush/image/upload/v1694424237/collections/Hero%20Images/Supermilk_NA_2.jpg',
  'https://res.cloudinary.com/lush/image/upload/v1673538800/collections/Hero%20Images/soap_hero.jpg',
  'https://res.cloudinary.com/lush/image/upload/v1687880209/collections/Hero%20Images/Dirty_Springwash.jpg',
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      currentSlide < data.length - 1
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(0);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className={cx('slider')}>
      <div
        className={cx('container')}
        style={{ transform: `translateX(calc(${currentSlide} * -100vw))` }}
      >
        {data.map((link) => {
          return <img src={link} alt='slide' />;
        })}
      </div>

      <div className={cx('radio-btns')}>
        {data.map((link, index) => {
          return (
            <input
              type='radio'
              id={`radio${index}`}
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
            />
          );
        })}
      </div>
      {/* manual nav */}
      <div className={cx('manual')}>
        {data.map((link, index) => {
          return (
            <label
              className={cx('manual-btn')}
              htmlFor={`radio${index}`}
            ></label>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
