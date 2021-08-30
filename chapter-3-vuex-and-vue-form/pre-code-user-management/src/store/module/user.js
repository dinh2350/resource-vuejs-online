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
      id: 1,
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
      userItem.name.includes(state.keyword)
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
