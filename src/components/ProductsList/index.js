import classNames from 'classnames/bind';
import styles from './ProductsList.module.scss';
import Card from '../Card';
import Pagination from '../Pagination';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import Filter from './Filter';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../api/getAPIs';

const cx = classNames.bind(styles);

const ProductsList = ({ total, featured, cat }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filters2 = cat
    ? { cat, page: 1, limit: 12 }
    : { featured, page: 1, limit: 12 };

  const [filters, setFilters] = useState(
    location.search ? queryString.parse(location.search) : filters2
  );

  // START: fetch api
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const data = await getProducts(filters);
        navigate(`?${queryString.stringify(filters)}`);
        setLoading(false);
        setProducts(data);
      } catch {}
    };
    fetchApi();
  }, [filters, navigate]);
  //END: fetch API

  //TH: nhan location tu btn
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
    if (!loading) {
      window.scrollTo(0, 500);
    }
  }

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
