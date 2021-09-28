import {
  createUserApi,
  getAllUserApi,
  removeUserApi,
  updateUserApi,
} from "../../apis/users";

const state = () => {
  return {
    userList: [],
    searchName: "",
  };
};
const getters = {
  userListByBoy(state) {
    return state.userList.filter((user) => user.gender === "Nam");
  },
  userListBySearchName(state) {
    const { userList, searchName } = state;
    return userList.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
  },
};
const mutations = {
  setUserListMutation(state, payload) {
    state.userList = payload;
  },
  setSearchNameMutation(state, payload) {
    state.searchName = payload;
  },
  addUserMutation(state, payload) {
    // state.userList = [...state.userList, payload]; // es6
    state.userList.push(payload); //es5
  },
  removeUserMutation(state, payload) {
    const index = state.userList.findIndex((user) => user.id === payload);
    if (index !== -1) {
      state.userList.splice(index, 1);
    } else {
      alert("không tìm thấy id phù hợp");
    }
  },
  updateUserMutation(state, payload) {
    const index = state.userList.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.userList[index] = payload;
    } else {
      alert("không tìm thấy user phù hợp");
    }
  },
};
const actions = {
  async getAllUserAction(context) {
    const payload = await getAllUserApi();
    context.commit("setUserListMutation", payload);
  },
  setSearchNameAction(context, payload) {
    setTimeout(() => {
      context.commit("setSearchNameMutation", payload);
    }, 500);
  },
  async addUserAction(context, payload) {
    const res = await createUserApi(payload);
    console.log(res);
    // gọi lại action getAllUserAction
    context.dispatch("getAllUserAction");
  },
  async removeUserAction(context, payload) {
    await removeUserApi(payload);
    // gọi lại action getAllUserAction
    context.dispatch("getAllUserAction");
  },
  async updateUserAction(context, payload) {
    await updateUserApi(payload);
    // gọi lại action getAllUserAction
    context.dispatch("getAllUserAction");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
