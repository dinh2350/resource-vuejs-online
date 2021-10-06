import UserList from "./pages/UserList.vue";
import PetList from "./pages/PetList.vue";
import UserDetail from "./pages/UserDetail.vue";
import { createRouter, createWebHistory } from "vue-router";
// import NotFound from "./pages/NotFound.vue";
const routes = [
  // {
  //   path: "/", // http://localhost:8080/
  //   redirect: "/users", // http://localhost:8080/users
  // },
  {
    path: "/users", // http://localhost:8080/users
    component: UserList,
    name: "user-list",
    alias: "/", // http://localhost:8080/
  },
  {
    path: "/pets", // http://localhost:8080/pets
    component: PetList,
  },
  {
    path: "/user-detail/:userId", // http://localhost:8080/user-detail
    name: "user-detail",
    component: UserDetail,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // routes : routes,
  linkActiveClass: "active",
});

export default router;
