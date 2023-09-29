import ProductBanner from '../../components/ProductBanner';
import ProductsList from '../../components/ProductsList';
import { BATH_PRODUCTS_URL } from '../../components/api/apiUrls';
import React, { Fragment } from 'react';
const BathProducts = () => {
  return (
    <Fragment>
      <ProductBanner type='bath' title='Bath Products' />
      <ProductsList apiUrl={BATH_PRODUCTS_URL} total={30} />
    </Fragment>
  );
};

export default BathProducts;
