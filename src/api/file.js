import axios from "axios";
import { FILE_URL } from "./config";

export const uploadFile = async (myFile) => {
  const formData = new FormData();
  formData.append("myFile", myFile);
  return axios.post(FILE_URL, formData).then((res) => res?.data?.data?._id);
};
