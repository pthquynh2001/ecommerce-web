import classNames from 'classnames/bind';
import styles from './ProductsList.module.scss';
import Card from '../Card';
import Pagination from '../Pagination';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { NEW_PRODUCTS_URL } from '../api/apiUrls';

const cx = classNames.bind(styles);

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 31,
  });
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const response = await fetch(`${NEW_PRODUCTS_URL}?${paramsString}`);
        const data = await response.json();
        // setLoading(false);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [filters]);

  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
    console.log('filters', filters);
  }

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
  );
};

export default Products;
