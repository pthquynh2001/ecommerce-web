import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import { FEATURED_PRODUCTS_URL } from '../../components/api/apiUrls';
import React, { Fragment } from 'react';
const FeaturedProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='featured' title='Featured Products' />
      <ProductsList apiUrl={FEATURED_PRODUCTS_URL} total={35} />
    </Fragment>
  );
};

export default FeaturedProducts;
