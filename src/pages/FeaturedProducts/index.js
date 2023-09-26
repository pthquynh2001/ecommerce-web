import ProductBanner from '../../components/ProductBanner';
import Products from '../../components/ProductsList';
import React, { Fragment } from 'react';
const FeaturedProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='featured' title='Featured Products' />
      <Products />
    </Fragment>
  );
};

export default FeaturedProducts;
