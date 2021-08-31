const state = () => ({
  userList: [
    {
      id: 1,
      name: "Nguyễn Phong Hào",
      avatar: "assets/images/faces/face1.jpg",
      age: 23,
      description: "thân thiện , hoc hỏi nhanh",
      programmingLanguage: ["JS", "JAVA"],
      gender: "Nam",
      type: "ADMIN",
    },
    {
      id: 2,
      name: "Phan Thùy Duyên",
      avatar: "assets/images/faces/face2.jpg",
      age: 22,
      description: "thân thiện , hoc hỏi nhanh",
      programmingLanguage: ["PHP", "C#"],
      gender: "Nữ",
      type: "CLIENT",
    },
  ],
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
  createUser({ commit, state }, user) {
    console.log(state);
    const newUser = { ...user, id: Math.random() };
    setTimeout(() => {
      commit("createUser", newUser);
    }, 500);
  },
  searchByUserName({ commit }, userName) {
    commit("searchByUserName", userName);
  },
  removeUserByid({ commit }, id) {
    commit("removeUserByid", id);
  },
  updateUser({ commit }, user) {
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
