import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Rooms from "../views/Rooms.vue";
import RoomDetail from "../views/RoomDetail.vue";
import Contact from "../views/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/room-detail",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
