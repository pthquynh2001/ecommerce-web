import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState, useEffect, useRef } from 'react';
import { getSliderImgs } from '../api/getAPIs';
// import { useFetch } from '../api';

const cx = classNames.bind(styles);

function Slider() {
  const [slideImages, setSlideImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const slideCount = slideImages.length;

  // START: fetch api
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSliderImgs();
      setSlideImages(data);
    };
    fetchData();
  }, []);
  // END: fetch api

  //START: auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < slideCount - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, slideCount]);

  //END: auto slider

  // START: draggable slider
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggingRange, setDraggingRange] = useState(0);

  const dragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    sliderRef.current.style.cursor = 'grab';
  };
  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };
  const dragStop = (e) => {
    sliderRef.current.style.cursor = 'default';
    setDraggingRange(e.pageX - startX);
    setIsDragging(false);
  };
  useEffect(() => {
    if (draggingRange < -100) {
      setCurrentSlide((prev) => (prev < slideCount - 1 ? prev + 1 : prev));
    } else if (draggingRange > 100) {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    } else return;
  }, [draggingRange, slideCount]);

  // END: draggable slider

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('inner')}
        ref={sliderRef}
        style={{
          transform: `translateX(calc(${currentSlide}* -100vw))`,
        }}
        // onMouseDown={handleMouseDown}

        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
      >
        {slideImages.map((img, index) => (
          <img src={img.url} alt='slide-img' key={index} />
        ))}
      </div>

      <div className={cx('radio-btns')}>
        {slideImages?.map((img, index) => (
          <label
            key={img.id}
            className={cx('holder')}
            htmlFor={`radio${index}`}
          >
            <input
              type='radio'
              key={img.id}
              id={`radio${index}`}
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
            />
            <span></span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Slider;
