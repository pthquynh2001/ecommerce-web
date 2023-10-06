import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import React, { Fragment } from 'react';
const HairProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='hair' title='Hair Care' />
      <ProductsList cat='hair' total={30} />
    </Fragment>
  );
};

export default HairProducts;
