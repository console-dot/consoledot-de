import axios from 'axios';
import { BASE_URL } from './config';

export const getAllProducts = () =>
  axios
    .get(`${BASE_URL}/product`)
    .then((res) => res?.data?.data)
    .catch(() => []);

export const getProductsbyId = (id) =>
  axios
    .get(`${BASE_URL}/product`)
    .then((res) =>
      res?.data?.data.filter((product) => product?.product_id === id)
    )
    .catch(() => []);
