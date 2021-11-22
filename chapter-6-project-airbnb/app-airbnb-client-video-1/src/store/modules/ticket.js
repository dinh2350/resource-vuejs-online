import { getTicketListByUserAPI } from "../../api/ticket";

const state = () => {
  return {
    roomsByUser: [],
  };
};

const mutations = {
  setTicketListByUserMutation(state, payload) {
    const data = payload.map((item) => ({
      _id: item.id,
      checkIn: item.checkIn,
      checkOut: item.checkOut,
      ...item.roomId,
    }));
    console.log(data);
    state.roomsByUser = data;
  },
};

const actions = {
  async getTicketListByUserAction({ commit }, payload) {
    const data = await getTicketListByUserAPI(payload);
    console.log(data);
    commit("setTicketListByUserMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
