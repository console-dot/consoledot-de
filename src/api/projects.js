import axios from 'axios';
import { BASE_URL } from './config';

export const getProjectsbyId = (id) =>
  axios
    .get(`${BASE_URL}/project`)
    .then((res) =>
      res?.data?.data.filter((project) => project?.customer_id === id)
    )
    .catch(() => []);

export const getSingleProject = (id) =>
  axios
    .get(`${BASE_URL}/project/${id}`)
    .then((res) => res?.data?.data)
    .catch(() => {});

export const getAllProjects = () =>
  axios.get(`${BASE_URL}/project`).then((res) => res?.data?.data);
