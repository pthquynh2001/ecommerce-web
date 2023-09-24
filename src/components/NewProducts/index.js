import React from 'react';
import Carousel from '../Carousel';

const NewProducts = () => {
  return (
    <Carousel
      API='https://65040a43c8869921ae246c4c.mockapi.io/api/new-products'
      title='New Products'
    />
  );
};

export default NewProducts;
