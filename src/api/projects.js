import axios from 'axios';
import { BASE_URL } from './config';

export const getProjectsbyId = (id) =>
  axios
    .get(`${BASE_URL}/project`)
    .then((res) =>
      res?.data?.data.filter((project) => project?.customer_id === id)
    )
    .catch(() => []);
