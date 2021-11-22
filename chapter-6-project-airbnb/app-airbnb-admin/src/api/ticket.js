import axiosAPI from ".";

export const getAllTicketAPI = () => {
  return axiosAPI.get("/api/tickets");
};
