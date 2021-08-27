import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  modules: {
    user: {
      namespaced: true,
      state() {
        return {
          userList: [
            {
              id: 1,
              name: "Nguyễn Phong Hào",
              avatar: "hinh",
              age: 23,
              description: "thân thiện , hoc hỏi nhanh",
              programmingLanguage: ["JS", "JAVA"],
              gender: "Nam",
              type: "ADMIN",
            },
            {
              id: 1,
              name: "Phan Thùy Duyên",
              avatar: "hinh",
              age: 22,
              description: "thân thiện , hoc hỏi nhanh",
              programmingLanguage: ["PHP", "C#"],
              gender: "Nữ",
              type: "CLIENT",
            },
          ],
        };
      },
      getters: {
        userListByAdmin(state) {
          return state.userList.filter((userItem) => userItem.type === "ADMIN");
        },
      },
      mutations: {
        createUser(state, payload) {
          state.userList.push(payload);
        },
      },
      actions: {
        createUser({ commit, state }, user) {
          console.log(state);
          setTimeout(() => {
            commit("createUser", user);
          }, 5000);
        },
      },
    },
  },
});

import AppModal from "./components/AppModal.vue";
const app = createApp(App);
app.use(store);
app.component("app-modal", AppModal);

app.mount("#app");
