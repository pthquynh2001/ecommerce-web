import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState, useEffect } from 'react';
import { getSliderImgs } from '../api/getAPIs';
// import { useFetch } from '../api';

const cx = classNames.bind(styles);

function Slider() {
  const [slideImages, setSlideImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSliderImgs();
      setSlideImages(data);
    };
    fetchData();
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
        {slideImages.map((img, index) => (
          <img src={img.url} alt='slide-img' key={index} />
        ))}
      </div>

      <div className={cx('radio-btns')}>
        {slideImages.map((img, index) => (
          <input
            type='radio'
            key={img.id}
            id={`radio${index}`}
            checked={currentSlide === index}
            onChange={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      {/* manual nav */}
      <div className={cx('manual')}>
        {slideImages.map((img, index) => (
          <label
            key={img.id}
            className={cx('manual-btn')}
            htmlFor={`radio${index}`}
          ></label>
        ))}
      </div>
    </div>
  );
}

export default Slider;
