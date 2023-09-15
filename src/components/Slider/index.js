import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Slider() {
  const [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    fetch('https://65040a43c8869921ae246c4c.mockapi.io/api/slider')
      .then((response) => response.json())
      .then((data) => setSliderImages(data));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      currentSlide < sliderImages.length - 1
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(0);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('inner')}
        style={{ transform: `translateX(calc(${currentSlide} * -100vw))` }}
      >
        {sliderImages.map((img) => {
          return <img src={img.url} alt='slide-image' />;
        })}
      </div>

      <div className={cx('radio-btns')}>
        {sliderImages.map((img, index) => {
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
        {sliderImages.map((img, index) => {
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
}

export default Slider;
