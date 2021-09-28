import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);

app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
