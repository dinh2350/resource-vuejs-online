import { getListLocation } from "../../apis/location";

const state = () => {
  return {
    listLoaction: [],
  };
};

const mutations = {
  setListLocation(state, payload) {
    state.listLoaction = payload;
  },
};

const actions = {
  async getListLocationAction({ commit }, payload) {
    const listLocation = await getListLocation(payload);
    commit("setListLocation", listLocation);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
