import ProductBanner from '../../components/ProductBanner';
import React, { Fragment } from 'react';
const FeaturedProducts = () => {
  return (
    <Fragment>
      <ProductBanner
        bannerAPI='https://650e1033a8b42265ec2ceca1.mockapi.io/api/product-banner'
        type='featured'
        title='Featured Products'
      />
    </Fragment>
  );
};

export default FeaturedProducts;
