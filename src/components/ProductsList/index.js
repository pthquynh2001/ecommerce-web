import classNames from 'classnames/bind';
import styles from './ProductsList.module.scss';
import Card from '../Card';
import Pagination from '../Pagination';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { NEW_PRODUCTS_URL } from '../api/apiUrls';
import { useNavigate, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [paramString, setParamString] = useState('limit=12&page=1');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    totalItems: 31,
  });
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
  });

  //1
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const pramString = queryString.stringify(filters);
  //       setLoading(true);
  //       const response = await fetch(
  //         `${NEW_PRODUCTS_URL}?${queryString.stringify(filters)}`
  //       );
  //       const data = await response.json();
  //       setLoading(false);
  //       setProducts(data);
  //       navigate(`?${queryString.stringify(filters)}`);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [filters]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const pramString = queryString.stringify(filters);
        setLoading(true);
        const response = await fetch(`${NEW_PRODUCTS_URL}?${paramString}`);
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [paramString]);

  // th1- nhan location tu btn
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
    if (!loading) {
      window.scrollTo(0, 500);
      // productsRef.current.scrollTop = 10;
    }
  }

  useEffect(() => {
    setParamString(`?${queryString.stringify(filters)}`);
    navigate(`?${queryString.stringify(filters)}`);
    console.log(paramString);
  }, [filters, navigate, paramString]);

  // th2 - nhan location tu url
  const params = location.search;

  useEffect(() => {
    setParamString(params);
  }, [params]);

  //2
  // console.log(window.location.search);
  // function handlePageChange(newPage) {
  //   setPagination({ ...pagination, page: newPage });
  //   setFilters({ ...filters, page: newPage });
  //   if (!loading) {
  //     window.scrollTo(0, 500);
  //     // productsRef.current.scrollTop = 10;
  //   }
  // }
  //3
  // useEffect(() => {
  //   navigate(`?${queryString.stringify(filters)}`);
  // }, [filters, navigate]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          <div className={cx('col', 'l-2')}>
            <div className={cx('filter')}>FILTER</div>
          </div>
          <div className={cx('col', 'l-10')}>
            <div className={cx('products-list')}>
              <div className={cx('info')}>
                <div className={cx('product-count')}>999 products</div>
                <div className={cx('filter-drop')}>recommended</div>
              </div>
              <div className={cx('row')}>
                {products &&
                  products.map((item) => (
                    <div key={item.id} className={cx('col', 'l-3')}>
                      <Card item={item} key={item.id} />
                    </div>
                  ))}
              </div>
              <div className={cx('row', 'pagination')}>
                {pagination && (
                  <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
