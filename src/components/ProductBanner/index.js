import classNames from 'classnames/bind';
import styles from './ProductBanner.module.scss';
import { useEffect, useState } from 'react';
import { getBannerImgs } from '../api/getAPIs';

const cx = classNames.bind(styles);

const ProductBanner = ({ type, title }) => {
  const [bannerImgs, setBannerImgs] = useState([]);
  const [bannerImg, setBannerImg] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBannerImgs();
      setBannerImgs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setBannerImg(...bannerImgs.filter((img) => img.type === type));
  }, [loading, type, bannerImgs]);

  return (
    <div className={cx('wrapper')}>
      <img
        src={bannerImg && bannerImg.url}
        alt='banner-img'
        className={cx('img')}
      ></img>
      <h1 className={cx('title')}>{title}</h1>
    </div>
  );
};

export default ProductBanner;
