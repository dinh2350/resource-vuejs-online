import Home from "./pages/home.vue";
import Dashboard from "./pages/dashboard.vue";
import Booking from "./pages/booking.vue";
import Blog from "./pages/blog.vue";
import DetaileRoom from "./pages/detail-room.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/detail-room",
    component: DetaileRoom,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/booking",
    component: Booking,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
