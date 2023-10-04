import styles from './ProductsMenu.module.scss';
import classNames from 'classnames/bind';
import { getCollectionNames } from '../../api/getAPIs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { COLLECTION_NAMES_URL } from '../../api/apiUrls';

const cx = classNames.bind(styles);

const ProductsMenu = ({ state }) => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollectionNames();
      setCollections(data);
    };
    fetchData();
  }, []);

  if (collections) {
    return (
      <div className={cx('wrapper', `${state}`)}>
        <div className={cx('inner')}>
          {collections.map((cat, index) => (
            <ul className={cx('category')} key={index}>
              <li className={cx('title')} key={index}>
                <Link to={`/collections/${cat.catName}`}>{cat.catName}</Link>
              </li>
              {cat.subCat.map((item, index) => (
                <li className={cx('sub-category')} key={index}>
                  <Link to={'/collections/featured'}>{item}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductsMenu;
