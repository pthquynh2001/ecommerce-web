import {
  SLIDER_IMGS_URL,
  CATEGORY_IMGS_URL,
  PRODUCT_BANNER_IMGS_URL,
} from './apiUrls';

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
