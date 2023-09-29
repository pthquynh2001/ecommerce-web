import styles from './ProductsMenu.module.scss';
import classNames from 'classnames/bind';
import { getCollectionNames } from '../../api/getAPIs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductsMenu = ({ state }) => {
  const [collections, setCollections] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const [data] = await getCollectionNames();
      setCollections(data);
    };
    fetchData();
  }, []);
  if (collections) {
    return (
      <div className={cx('wrapper', `${state}`)}>
        <div className={cx('inner')}>
          <ul className={cx('category')}>
            <li className={cx('title')}>
              <Link to={'/collections/featured'}>Featured</Link>
            </li>
            {collections.featured?.map((item, index) => (
              <li className={cx('sub-category')} key={index}>
                <Link to={'/collections/featured'}>{item}</Link>
              </li>
            ))}
          </ul>

          <ul className={cx('category')}>
            <li className={cx('title')}>
              <Link to={'/collections/bath'}>Bath</Link>
            </li>
            {collections.bath?.map((item, index) => (
              <li className={cx('sub-category')} key={index}>
                <Link to={'/collections/bath'}>{item}</Link>
              </li>
            ))}
          </ul>

          <ul className={cx('category')}>
            <li className={cx('title')}>
              <Link to={'/collections/shower'}>Shower</Link>
            </li>
            {collections.shower?.map((item, index) => (
              <li className={cx('sub-category')} key={index}>
                <Link to={'/collections/shower'}>{item}</Link>
              </li>
            ))}
          </ul>

          <ul className={cx('category')}>
            <li className={cx('title')}>
              <Link to={'/collections/hair'}>Hair</Link>
            </li>
            {collections.hair?.map((item, index) => (
              <li className={cx('sub-category')} key={index}>
                <Link to={'/collections/hair'}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default ProductsMenu;
