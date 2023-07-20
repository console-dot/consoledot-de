import axios from "axios";
import { BASE_URL } from "./config";

export const getAllDepartments = () => {
  return axios.get(`${BASE_URL}/department`).then((res) => res?.data?.data);
};

export const getSingleDepartment = (id) => {
  return axios
    .get(`${BASE_URL}/department/${id}`)
    .then((res) => res?.data?.data);
};
