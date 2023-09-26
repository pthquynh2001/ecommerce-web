import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import Card from '../Card';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Carousel({ productAPI, title }) {
  const [productImages, setProductImages] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const carouselRef = useRef();
  const chevronLeftRef = useRef();
  const chevronRightRef = useRef();

  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      const data = await productAPI();
      setProductImages(data);
      setLoaded(true);
    };
    fetchData();
  }, [productAPI]);
  // END fetch API

  useEffect(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.clientWidth;

      if (scrollLeft <= 0) {
        chevronLeftRef.current.style.display = 'none';
      } else {
        chevronLeftRef.current.style.display = 'block';
      }

      if (scrollLeft + containerWidth >= carouselWidth) {
        chevronRightRef.current.style.display = 'none';
      } else {
        chevronRightRef.current.style.display = 'block';
      }
    }
  }, [scrollLeft, loaded]);

  const handleChevronClick = (direction) => {
    const scrollAmount = carouselRef.current.clientWidth / 4 + 1; // Điều chỉnh giá trị scroll
    console.log(scrollAmount);
    if (direction === 'left') {
      setScrollLeft((carouselRef.current.scrollLeft -= scrollAmount));
    } else {
      setScrollLeft((carouselRef.current.scrollLeft += scrollAmount));
    }
    console.log(carouselRef.current.scrollWidth);
    console.log(carouselRef.current.scrollLeft);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2 className={cx('title')}>{title}</h2>
        <div className={cx('container')}>
          <div
            className={cx('chevron-btn', 'left')}
            onClick={() => handleChevronClick('left')}
            ref={chevronLeftRef}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={cx('carousel')} ref={carouselRef}>
            {productImages.map((item) => (
              <div className={cx('col', 'l-3')} key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </div>
          <div
            className={cx('chevron-btn', 'right')}
            onClick={() => handleChevronClick('right')}
            ref={chevronRightRef}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
