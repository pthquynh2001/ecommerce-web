import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import React, { Fragment } from 'react';
const ShowerProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='shower' title='Shower Products' />
      <ProductsList cat='shower' total={40} />
    </Fragment>
  );
};

export default ShowerProducts;
