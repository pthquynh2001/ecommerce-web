import classNames from 'classnames/bind';
import styles from './ProductsList.module.scss';
import Card from '../Card';
import Pagination from '../Pagination';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import Filter from './Filter';
// import { FEATURED_PRODUCTS_URL } from '../api/apiUrls';
// import { useNavigate } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductsList = ({ apiUrl, total }) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [paramString, setParamString] = useState(
    location.search ? location.search.slice(1) : 'limit=12&page=1'
  );

  const queryPage = parseInt(queryString.parse(location.search).page);
  const [pagination, setPagination] = useState(
    location.search
      ? {
          page: queryPage,
          limit: 12,
          totalItems: total,
        }
      : {
          page: 1,
          limit: 12,
          totalItems: total,
        }
  );

  const [filters, setFilters] = useState(
    location.search
      ? queryString.parse(location.search)
      : {
          page: 1,
          limit: 12,
        }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const pramString = queryString.stringify(filters);
        setLoading(true);
        const response = await fetch(`${apiUrl}&${paramString}`);
        const data = await response.json();
        navigate(`?${paramString}`);
        setLoading(false);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [paramString, navigate, apiUrl]);

  //th1- nhan location tu btn
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
    if (!loading) {
      window.scrollTo(0, 500);
      // productsRef.current.scrollTop = 10;
    }
  }

  useEffect(() => {
    setParamString(`${queryString.stringify(filters)}`);
  }, [filters]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          <div className={cx('col', 'l-3')}>
            <Filter />
          </div>
          <div className={cx('col', 'l-9')}>
            <div className={cx('products-list')}>
              <div className={cx('info')}>
                <div className={cx('product-count')}>
                  {pagination.totalItems} products
                </div>
                <select name='sort' id='sort' className={cx('sort')}>
                  <option value='1'>Top sellers</option>
                  <option value='2'>New arrivals</option>
                  <option value='3'>Price low to high</option>
                  <option value='4'>Price high to low</option>
                </select>
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

export default ProductsList;
