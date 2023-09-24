import { NEW_PRODUCTS_URL, TRENDING_PRODUCTS_URL } from './apiUrls';

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
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
