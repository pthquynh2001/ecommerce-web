import React from 'react';
import Carousel from '../Carousel';

const NewProducts = () => {
  return (
    <div className='new-products'>
      <Carousel
        params={{ collection: 'new' }}
        title='New Products'
        showMoreLink='/collections/featured'
      />
    </div>
  );
};

export default NewProducts;
