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
  let isDragStart = false;

  useEffect(() => {
    fetch('https://65040a43c8869921ae246c4c.mockapi.io/api/new-products')
      .then((response) => response.json())
      .then((data) => setProductImages(data))
      .catch((err) => console.log(err));
  }, []);

  const dragStart = () => {
    console.log('start');
    isDragStart = true;
  };

  const dragging = (e) => {
    if (isDragStart) {
      console.log('dragging');
      if (!isDragStart) return;
      e.preventDefault();
      // carouselRef.current.scrollLeft = e.pageX;
      const offsetX =
        e.pageX - carouselRef.current.getBoundingClientRect().left;
      carouselRef.current.scrollLeft = offsetX;
    }
  };

  const dragStop = () => {
    console.log('end');
    isDragStart = false;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener('mousedown', dragStart);
      carouselRef.current.addEventListener('mousemove', dragging);
      carouselRef.current.addEventListener('mouseup', dragStop);
    }
  }, [carouselRef.current]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('chevron-btn', 'left')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={cx('carousel')} ref={carouselRef}>
          {productImages.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <div className={cx('chevron-btn', 'right')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
