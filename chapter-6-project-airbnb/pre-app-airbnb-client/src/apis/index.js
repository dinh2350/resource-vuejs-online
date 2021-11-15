import axios from "axios";
import configs from "../configs";
const axiosAPI = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn",
});

axiosAPI.interceptors.request.use(
  function (config) {
    config.headers.tokenByClass = configs.tokenByClass;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAPI.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosAPI;
