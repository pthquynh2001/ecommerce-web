import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
// import { useState, useEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import { getSliderImgs } from '../api/getAPIs';
// import { useFetch } from '../api';

const cx = classNames.bind(styles);

function Slider() {
  const [slideImages, setSlideImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slideImages.length;
  const prevSlideRef = useRef();
  const activeSlideRef = useRef();
  const slideRef = useRef();
  const sliderRef = useRef();

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
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev < slideCount - 1 ? prev + 1 : 0));
  //     // setIsCoolingDown(true);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [currentSlide, slideCount]);

  // END: auto slider

  // START: draggable slider
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggingRange, setDraggingRange] = useState(0);

  const dragStart = (e) => {
    if (!isCoolingDown) {
      setIsDragging(true);
      setStartX(e.pageX);
      if (sliderRef.current) {
        sliderRef.current.style.cursor = 'grab';
      }
    }
    setIsCoolingDown(true);
  };
  const dragging = (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    if (sliderRef.current) {
      const sliderCurrentX = currentSlide * -100;
      sliderRef.current.style.transform = `translate(calc(${sliderCurrentX}vw + ${diff}px))`;
    }
    e.preventDefault();
  };
  const dragStop = (e) => {
    if (sliderRef.current) sliderRef.current.style.cursor = 'default';
    setDraggingRange(e.pageX - startX);
    setIsDragging(false);
  };

  useEffect(() => {
    sliderRef.current.style.transform = null;
    if (draggingRange < -200) {
      sliderRef.current.style.transform = null;
      setCurrentSlide((prev) => (prev < slideCount - 1 ? prev + 1 : 0));
    } else if (draggingRange > 200) {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slideCount - 1));
    }
  }, [draggingRange, slideCount]);
  // END: draggable slider

  // START: lay lai index slide truoc do
  useEffect(() => {
    prevSlideRef.current = currentSlide;
  }, [currentSlide]);
  // END: lay laj index slide truoc do

  // START: them class cho slide
  const addClass = (index) => {
    const prevSlide = prevSlideRef.current;
    if (index === currentSlide) {
      return 'active';
    }
    if (index === prevSlide) {
      return 'prev-slide';
    }
  };
  // END: them class cho slide

  // START: set Cooldown tranh manual click nhieu lan
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  useEffect(() => {
    const cooldownTimeout = setTimeout(() => {
      setIsCoolingDown(false);
    }, 1600); // 1.5s cooldown = thoi gian chuyen slide de slide chuyen thanh cong

    return () => {
      clearTimeout(cooldownTimeout);
    };
  }, [isCoolingDown]);
  // END: set Cooldown

  // START: handle slide change khi manual click
  const handleSlideChange = (index) => {
    if (!isCoolingDown) {
      setCurrentSlide(index);
      setIsCoolingDown(true);
    }
  };
  // END: handle slide change khi manual click

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
        // onAnimationEnd={slideReset}
      >
        {slideImages.map((img, index) => (
          <img
            src={img.url}
            alt='slide-img'
            key={index}
            className={cx('slide', addClass(index))}
            // onClick={click}
            ref={index === currentSlide ? activeSlideRef : slideRef}
          />
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
              // onChange={() => {
              //   setCurrentSlide(index);
              // }}
              onChange={() => handleSlideChange(index)}
            />
            <span></span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Slider;
