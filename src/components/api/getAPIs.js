import {
  SLIDER_IMGS_URL,
  CATEGORY_IMGS_URL,
  PRODUCT_BANNER_IMGS_URL,
  COLLECTION_NAMES_URL,
  FILTERS_URL,
  PRODUCTS_URL,
} from './apiUrls';
import axios from 'axios';

export const getProducts = async (params) => {
  try {
    const response = await axios.get(PRODUCTS_URL, { params: params });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getSliderImgs = async () => {
  try {
    const response = await fetch(SLIDER_IMGS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getCategoryImgs = async () => {
  try {
    const response = await fetch(CATEGORY_IMGS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getBannerImgs = async () => {
  try {
    const response = await fetch(PRODUCT_BANNER_IMGS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getCollectionNames = async () => {
  try {
    const response = await fetch(COLLECTION_NAMES_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFilterNames = async () => {
  try {
    const response = await fetch(FILTERS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
