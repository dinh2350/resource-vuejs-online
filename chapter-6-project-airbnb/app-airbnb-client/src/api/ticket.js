import axiosAPI from ".";
export const getTicketListByUserAPI = (userId) => {
  return axiosAPI.get(`/api/tickets/by-user?userId=${userId}`);
};
