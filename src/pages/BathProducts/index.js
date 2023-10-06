import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import React, { Fragment } from 'react';
const BathProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='bath' title='Bath Products' />
      <ProductsList cat='bath' total={30} />
    </Fragment>
  );
};

export default BathProducts;
