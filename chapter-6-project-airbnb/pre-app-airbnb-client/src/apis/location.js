import axiosAPI from ".";

export const getListLocation = (location) => {
  return axiosAPI.get(`/api/locations?location=${location}`);
};
