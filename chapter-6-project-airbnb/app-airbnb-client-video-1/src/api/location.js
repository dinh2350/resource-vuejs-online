import axiosAPI from ".";
export const getLocationListAPI = (location) => {
  return axiosAPI.get(`/api/locations?location=${location}`);
};
