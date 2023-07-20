import axios from "axios";
import { BASE_URL } from "./config";

export const getAllCareers = () => {
  return axios.get(`${BASE_URL}/careers`).then((res) => res?.data?.data);
};

export const getSingleJob = (id) => {
  return axios.get(`${BASE_URL}/careers/${id}`).then((res) => res?.data?.data);
};
