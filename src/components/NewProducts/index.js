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
  const carouselRef = useRef();

  useEffect(() => {
    fetch('https://65040a43c8869921ae246c4c.mockapi.io/api/new-products')
      .then((response) => response.json())
      .then((data) => setProductImages(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChevronClick = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 1200 / 4;

    if (direction === 'left') {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>NEW PRODUCTS</h1>
        <div className={cx('container')}>
          <div
            className={cx('chevron-btn', 'left')}
            onClick={() => handleChevronClick('left')}
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
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
