import classNames from 'classnames/bind';
import styles from './SingleArticle.module.scss';
import { useState, useEffect, useMemo } from 'react';
import { getArticles } from '../api/getAPIs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const SingleArticle = ({ id }) => {
  // const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({});

  const params = useMemo(() => {
    return {
      page: 1,
      limit: 1,
      id: id,
    };
  }, [id]);

  // START: fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const [data] = await getArticles(params);
        // setLoading(false);
        setArticle(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params]);
  // EMD: fetch API

  return (
    <div className={cx('wrapper')}>
      <div className={cx('text-block')}>
        <h1 className={cx('title')}>{article.title}</h1>
        <h2 className={cx('description')}>{article.description}</h2>
      </div>

      <div className={cx('article-banner')}>
        <img src={article.bannerUrl} alt='article-banner' />
      </div>
      <div className={cx('text-block')}>
        {article.content?.map((content, index) => {
          return (
            <div className={cx('paragraph')} key={index}>
              <h3 className={cx('heading')}>{content.heading}</h3>
              <div
                className={cx('text')}
                dangerouslySetInnerHTML={{ __html: content.text }}
              ></div>
            </div>
          );
        })}
        <p className={cx('author')}>Words by {article.author}</p>
        <p className={cx('published-at')}>Published at {article.publishedAt}</p>
        <div className={cx('back')}>
          <Link to={`/articles`}>
            <i className={cx('back-icon')}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            <p className={cx('articles-list')}>Back to articles list</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
