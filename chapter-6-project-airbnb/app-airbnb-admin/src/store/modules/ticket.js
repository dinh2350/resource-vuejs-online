import { getAllTicketAPI } from "../../api/ticket";
import { formatDate } from "./../../utils/format-date";
const state = () => {
  return {
    ticketList: [],
  };
};

const mutations = {
  setTicketListMutation(state, payload) {
    state.ticketList = payload.map((item) => ({
      ...item,
      checkIn: formatDate(item.checkIn),
      checkOut: formatDate(item.checkOut),
    }));
  },
};

const actions = {
  async getAllTicketAction({ commit }) {
    const data = await getAllTicketAPI();
    commit("setTicketListMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
