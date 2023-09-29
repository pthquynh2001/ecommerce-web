import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import { HAIR_PRODUCTS_URL } from '../../components/api/apiUrls';
import React, { Fragment } from 'react';
const HairProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='hair' title='Hair Care' />
      <ProductsList apiUrl={HAIR_PRODUCTS_URL} total={30} />
    </Fragment>
  );
};

export default HairProducts;
