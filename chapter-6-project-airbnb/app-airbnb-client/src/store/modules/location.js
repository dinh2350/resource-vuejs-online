import { getLocationListAPI } from "../../api/location";

const state = () => {
  return {
    locationList: [],
  };
};

const mutations = {
  setLocationMutation(state, payload) {
    state.locationList = payload;
  },
};

const actions = {
  async getLocationListAction(context, payload) {
    const data = await getLocationListAPI(payload);
    context.commit("setLocationMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
