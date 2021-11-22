import { signInAPI } from "../../api/auth";

const state = () => {
  return {
    userLogin: {},
  };
};

const mutations = {
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },
};

const actions = {
  async signInAction({ commit }, { data, router }) {
    try {
      const userLogin = await signInAPI(data);
      router.push("/dashboard");
      commit("setUserLoginMutation", userLogin);
    } catch (error) {
      alert("tài khoản hoặc mất khẩu không chính xác");
      localStorage;
    }
  },
  loadUserLoginFromLocalStorageAction({ commit }) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    commit("setUserLoginFromLocalStorage", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
