import classNames from 'classnames/bind';
import styles from './Articles.module.scss';
import queryString from 'query-string';
import Pagination from '../Pagination';
import { useState, useEffect } from 'react';
import { getArticles } from '../api/getAPIs';
import { useNavigate, useLocation, Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Articles = ({ total }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const queryPage = parseInt(queryString.parse(location.search).page);
  const [pagination, setPagination] = useState(
    location.search
      ? {
          page: queryPage,
          limit: 6,
          totalItems: total,
        }
      : {
          page: 1,
          limit: 6,
          totalItems: total,
        }
  );

  const [filters, setFilters] = useState(
    location.search ? queryString.parse(location.search) : { page: 1, limit: 6 }
  );

  // START: fetch api
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const data = await getArticles(filters);
        navigate(`?${queryString.stringify(filters)}`);
        setLoading(false);
        setArticles(data);
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
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          {articles.map((article, index) => {
            return (
              <div className={cx('col', 'l-4')} key={index}>
                <div className={cx('article')}>
                  <Link to={`/article/${article.id}`}>
                    <div className={cx('banner')}>
                      <img
                        src={article.bannerUrl}
                        alt='article-banner'
                        className={cx('banner-img')}
                      />
                    </div>
                  </Link>
                  <div className={cx('summary')}>
                    <Link to={`/article/${article.id}`}>
                      <h2 className={cx('title')}>{article.title}</h2>
                    </Link>
                    <h3 className={cx('description')}>{article.description}</h3>
                    <p className={cx('publish-date')}>{article.publishedAt}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {pagination && (
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
