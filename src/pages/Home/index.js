// import style from './Home.module.scss';
import Slider from '../../components/Slider';
import NewProducts from '../../components/NewProducts';
import Categories from '../../components/Categories';
import TrendingProducts from '../../components/TrendingProducts';

import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <NewProducts />
      <Categories />
      <TrendingProducts />
    </Fragment>
  );
};

export default Home;
