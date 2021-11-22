import { signInAPI, signUpAPI } from "../../api/auth";

const state = () => {
  return {
    userRegister: {},
    userLogin: {},
  };
};

const mutations = {
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },
};

const actions = {
  async signUpAction({ commit }, { data, router }) {
    const userRegister = await signUpAPI(data);
    router.push("/sign-in");
    commit("setUserRegisterMutation", userRegister);
  },
  async signInAction({ commit }, { data, router }) {
    try {
      const userLogin = await signInAPI(data);
      router.push("/");
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
