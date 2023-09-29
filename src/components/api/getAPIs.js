import {
  NEW_PRODUCTS_URL,
  TRENDING_PRODUCTS_URL,
  SLIDER_IMGS_URL,
  CATEGORY_IMGS_URL,
  PRODUCT_BANNER_IMGS_URL,
  COLLECTION_NAMES_URL,
} from './apiUrls';

export const getNewProducts = async () => {
  try {
    const response = await fetch(NEW_PRODUCTS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getTrendingProducts = async () => {
  try {
    const response = await fetch(TRENDING_PRODUCTS_URL);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getSliderImgs = async () => {
  try {
    const response = await fetch(SLIDER_IMGS_URL);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
export const getCategoryImgs = async () => {
  try {
    const response = await fetch(CATEGORY_IMGS_URL);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
export const getBannerImgs = async () => {
  try {
    const response = await fetch(PRODUCT_BANNER_IMGS_URL);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
export const getCollectionNames = async () => {
  try {
    const response = await fetch(COLLECTION_NAMES_URL);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
