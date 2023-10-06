import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import Card from '../Card';
import { getProducts } from '../api/getAPIs';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Carousel({ params, title, showMoreLink }) {
  const [products, setProducts] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef();
  const chevronLeftRef = useRef();
  const chevronRightRef = useRef();

  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(params);
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, [params]);
  // END fetch API

  // START an hien chevron
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
  }, [scrollLeft, loading]);
  // END an hien chevron

  // START manual click chevron
  const handleChevronClick = (direction) => {
    const scrollAmount = carouselRef.current.clientWidth / 4 + 1; // Điều chỉnh giá trị scroll
    if (direction === 'left') {
      setScrollLeft((carouselRef.current.scrollLeft -= scrollAmount));
    } else {
      setScrollLeft((carouselRef.current.scrollLeft += scrollAmount));
    }
  };
  // END manual click chevron

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner', 'grid', 'wide')}>
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
            {products &&
              products.map((item) => (
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
        <Link to={showMoreLink}>
          <button className={cx('show-more-btn', 'btn')}>
            <p className={cx('btn-text')}>Show More</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
