import {
  createDevAPIs,
  getAllDevsAPIs,
  removeDevAPIs,
  updateDevAPIs,
} from "../../api/devs.api";

const state = () => ({
  userList: [],
  keyword: "",
});

const getters = {
  userListByUserName(state) {
    return state.userList.filter((userItem) =>
      userItem.name.toLowerCase().includes(state.keyword.toLowerCase())
    );
  },
};

const mutations = {
  getDevsMutation(state, payload) {
    state.userList = payload;
  },
  createUser(state, payload) {
    state.userList.push(payload);
  },
  searchByUserName(state, payload) {
    state.keyword = payload;
  },
  removeUserByid(state, payload) {
    state.userList = state.userList.filter((user) => user.id !== payload);
  },
  updateUser(state, payload) {
    const index = state.userList.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.userList[index] = payload;
    }
  },
};

const actions = {
  async getAllDevsAction({ commit }) {
    const devs = await getAllDevsAPIs();
    commit("getDevsMutation", devs);
  },
  async createUser({ commit, state }, user) {
    console.log(state);
    const newUser = { ...user, id: Math.random() };
    const testnewUser = await createDevAPIs(user);
    console.log(testnewUser);
    setTimeout(() => {
      commit("createUser", newUser);
    }, 500);
  },
  searchByUserName({ commit }, userName) {
    commit("searchByUserName", userName);
  },
  async removeUserByid({ commit }, id) {
    await removeDevAPIs(id);
    commit("removeUserByid", id);
  },
  async updateUser({ commit }, user) {
    await updateDevAPIs(user.id, user);
    commit("updateUser", user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
