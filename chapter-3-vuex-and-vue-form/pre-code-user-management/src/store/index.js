import { createStore } from "vuex";
import user from "./module/user";
export default createStore({
  modules: {
    user,
  },
});
