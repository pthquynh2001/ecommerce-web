import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import React, { Fragment } from 'react';
const FeaturedProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='featured' title='Featured Products' />
      <ProductsList total={35} featured={true} />
    </Fragment>
  );
};

export default FeaturedProducts;
