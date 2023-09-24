import React from 'react';
import Carousel from '../Carousel';
import { getNewProducts } from '../api/productAPIs';

const NewProducts = () => {
  return <Carousel productAPI={getNewProducts} title='New Products' />;
};

export default NewProducts;
