import axios from "axios";
import { BASE_URL } from "./config";

export const getAllCities = () => {
  return axios.get(`${BASE_URL}/city`).then((res) => res?.data?.data);
};

export const getSingleCity = (id) => {
  return axios.get(`${BASE_URL}/city/${id}`).then((res) => res?.data?.data);
};
