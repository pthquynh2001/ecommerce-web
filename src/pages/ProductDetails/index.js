import React from 'react';
import SingleProduct from '../../components/SingleProduct';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <SingleProduct id={id}></SingleProduct>
    </>
  );
};

export default ProductDetails;
