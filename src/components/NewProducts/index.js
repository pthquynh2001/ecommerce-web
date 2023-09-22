import classNames from 'classnames/bind';
import styles from './NewProducts.module.scss';
import Card from '../Card';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NewProducts() {
  const [productImages, setProductImages] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef();
  const chevronLeftRef = useRef();
  const chevronRightRef = useRef();

  // fetch API
  useEffect(() => {
    fetch('https://65040a43c8869921ae246c4c.mockapi.io/api/new-products')
      .then((response) => response.json())
      .then((data) => setProductImages(data))
      .catch((err) => console.log(err));
  }, []);
  // END fetch API

  useEffect(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.clientWidth;

      if (scrollLeft === 0) {
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
  });
  const handleChevronClick = (direction) => {
    const scrollAmount = 300; // Điều chỉnh giá trị scroll

    if (direction === 'left') {
      carouselRef.current.scrollLeft -= scrollAmount;
      console.log('left');
      console.log(carouselRef.current.scrollLeft);
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
      console.log('right');
      console.log(carouselRef.current.scrollLeft);
    }
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>NEW PRODUCTS</h1>
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

export default NewProducts;
