import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import AppModal from "./components/AppModal.vue";
const app = createApp(App);

app.component("app-modal", AppModal);
app.mount("#app");
