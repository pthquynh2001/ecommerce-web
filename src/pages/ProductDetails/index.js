import React from 'react';
import SingleProduct from '../../components/SingleProduct';
import Carousel from '../../components/Carousel';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <SingleProduct id={id}></SingleProduct>
      <div className='divider'>
        <Carousel params={{ collection: 'new' }} title='You might also like' />
      </div>
    </>
  );
};

export default ProductDetails;
