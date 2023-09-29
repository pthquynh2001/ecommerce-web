import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import { SHOWER_PRODUCTS_URL } from '../../components/api/apiUrls';
import React, { Fragment } from 'react';
const ShowerProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='shower' title='Shower Products' />
      <ProductsList apiUrl={SHOWER_PRODUCTS_URL} total={40} />
    </Fragment>
  );
};

export default ShowerProducts;
