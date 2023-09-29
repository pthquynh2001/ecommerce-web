import React from 'react';
import Carousel from '../Carousel';
import { getNewProducts } from '../api/getAPIs';

const NewProducts = () => {
  return (
    <div className='new-products'>
      <Carousel productAPI={getNewProducts} title='New Products' />
    </div>
  );
};

export default NewProducts;
