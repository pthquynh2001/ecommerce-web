import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Slider() {
  const [slideImages, setSlideImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://65040a43c8869921ae246c4c.mockapi.io/api/slider')
      .then((response) => response.json())
      .then((data) => setSlideImages(data))
      .catch((err) => console.log(err));
  }, []);

  const slideCount = slideImages.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < slideCount - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, slideImages, slideCount]);
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('inner')}
        style={{
          transform: `translateX(calc(${currentSlide}* -100vw))`,
        }}
      >
        {slideImages.map((img, index) => {
          return <img src={img.url} alt='slide-img' key={index} />;
        })}
      </div>

      <div className={cx('radio-btns')}>
        {slideImages.map((img, index) => {
          return (
            <input
              type='radio'
              key={img.id}
              id={`radio${index}`}
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
            />
          );
        })}
      </div>
      {/* manual nav */}
      <div className={cx('manual')}>
        {slideImages.map((img, index) => {
          return (
            <label
              key={img.id}
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
