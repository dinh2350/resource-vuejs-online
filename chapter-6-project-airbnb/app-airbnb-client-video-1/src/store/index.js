import { createStore } from "vuex";
import location from "./modules/location";
import rooms from "./modules/rooms";
import auth from "./modules/auth";
import ticket from "./modules/ticket";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    rooms,
    auth,
    ticket,
  },
});
