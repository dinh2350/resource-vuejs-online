import { createApp } from "vue";
import App from "./App.vue";
import GobalComponent from "./components/GobalComponent.vue";
// createApp(App).mount("#app");
const app = createApp(App);
app.component("GobalComponent", GobalComponent);
app.mount("#app");
