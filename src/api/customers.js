import axios from 'axios';
import { BASE_URL } from './config';

export const getAllCustomers = () =>
  axios
    .get(`${BASE_URL}/customer`)
    .then((res) => res?.data?.data)
    .catch(() => []);

export const getSingleCustomer = (id) =>
  axios
    .get(`${BASE_URL}/customer/${id}`)
    .then((res) => res?.data?.data)
    .catch(() => []);
