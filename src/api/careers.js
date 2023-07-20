import axios from "axios";
import { BASE_URL } from "./config";
import { uploadFile } from "./file";

export const getAllCareers = () => {
  return axios.get(`${BASE_URL}/careers`).then((res) => res?.data?.data);
};

export const getSingleJob = (id) => {
  return axios.get(`${BASE_URL}/careers/${id}`).then((res) => res?.data?.data);
};

export const applyNow = (data) => {
  return uploadFile(data?.myFile).then((cv_ref) => {
    data.cv_ref = cv_ref;
    return axios
      .post(`${BASE_URL}/application`, data)
      .then((res) => res?.data?.data);
  });
};
