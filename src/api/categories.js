import axios from 'axios';
import { BASE_URL } from './config';

export const getAllCategories = () =>
  axios
    .get(`${BASE_URL}/product_category`)
    .then((res) => res?.data?.data)
    .catch(() => []);

export const getSingleCategory = (id) =>
  axios
    .get(`${BASE_URL}/product_category/${id}`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch(() => []);
