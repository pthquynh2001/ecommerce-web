import style from './Home.module.scss';
import Slider from '../../components/Slider';
import NewProducts from '../../components/NewProducts';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <NewProducts />
    </Fragment>
  );
};

export default Home;
