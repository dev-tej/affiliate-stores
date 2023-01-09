import axios from "axios";

const apiURL = "https://api.galleri5.co.in/servicer";

export const axiosInstance = axios.create({
  baseURL: apiURL,
});
