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

function Carousel({ API, title }) {
  const [productImages, setProductImages] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [rendered, setRendered] = useState(false);
  const carouselRef = useRef();
  const chevronLeftRef = useRef();
  const chevronRightRef = useRef();

  // fetch API
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProductImages(data))
      .then(() => setRendered(true))
      .catch((err) => console.log(err));
  }, [API]);
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
      console.log(carouselWidth, containerWidth);
    }
  }, [scrollLeft, rendered]);

  const handleChevronClick = (direction) => {
    const scrollAmount = 300; // Điều chỉnh giá trị scroll

    if (direction === 'left') {
      setScrollLeft((carouselRef.current.scrollLeft -= scrollAmount));
    } else {
      setScrollLeft((carouselRef.current.scrollLeft += scrollAmount));
    }
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
              <Card item={item} key={item.id} />
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
