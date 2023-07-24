import axios from 'axios';
import { BASE_URL } from './config';

export const getAllTechnologies = () => {
  return axios.get(`${BASE_URL}/technology`).then((res) => res.data.data);
};

export const getSingleTechnology = (id) => {
  return axios.get(`${BASE_URL}/technology/${id}`).then((res) => res.data.data);
};

export const getAllTechnologyCategories = () => {
  return axios
    .get(`${BASE_URL}/technology_category`)
    .then((res) => res.data.data);
};

export const getProjectByTechnology = (id) => {
  return axios
    .get(`${BASE_URL}/case_study`)
    .then((res) => res?.data?.data)
    .then((res) => res.filter((i) => i?.technologies.includes(id)));
};
