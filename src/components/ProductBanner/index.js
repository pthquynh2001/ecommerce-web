import classNames from 'classnames/bind';
import styles from './ProductBanner.module.scss';
import { useEffect, useState } from 'react';
import { getBannerImgs } from '../api/imageAPIs';

const cx = classNames.bind(styles);

const ProductBanner = ({ type, title }) => {
  const [bannerImgs, setBannerImgs] = useState([]);
  const [bannerImg, setBannerImg] = useState({});
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBannerImgs();
      setBannerImgs(data);
      setRendered(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setBannerImg(...bannerImgs.filter((img) => img.type === type));
  }, [rendered, type, bannerImgs]);

  (function a() {
    console.log(bannerImg);
  })();

  return (
    <div className={cx('wrapper')}>
      <img
        src={bannerImg && bannerImg.url}
        alt='banner-img'
        className={cx('img')}
      ></img>
      <div className={cx('title')}>{title}</div>
    </div>
  );
};

export default ProductBanner;
