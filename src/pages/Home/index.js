// import style from './Home.module.scss';
import Slider from '../../components/Slider';
import NewProducts from '../../components/NewProducts';
import Categories from '../../components/Categories';

import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <NewProducts />
      <Categories />
    </Fragment>
  );
};

export default Home;
