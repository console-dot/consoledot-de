import axios from 'axios';
import { BASE_URL } from './config';

export const getSingleCaseStudy = (ref_id) => {
  return axios
    .get(`${BASE_URL}/case_study`)
    .then((res) => res?.data?.data)
    .then((res) => res.find((res) => res?.ref_id === ref_id));
};
