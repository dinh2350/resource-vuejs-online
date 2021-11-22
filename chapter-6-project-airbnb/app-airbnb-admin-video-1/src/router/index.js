import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Booking from "../views/Booking.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      console.log(to, from, next);
      const { user } = JSON.parse(localStorage.getItem("userLogin"));
      if (user.type === "ADMIN") {
        next();
      } else {
        next("/");
        alert("Bạn Không có quyền vào trang quản trị");
      }
    },
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
    beforeEnter(to, from, next) {
      console.log(to, from, next);
      const { user } = JSON.parse(localStorage.getItem("userLogin"));
      if (user.type === "ADMIN") {
        next();
      } else {
        next("/");
        alert("Bạn Không có quyền vào trang quản trị");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
