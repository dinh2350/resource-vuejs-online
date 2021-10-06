import { createRouter, createWebHistory } from "vue-router";
import PetList from "./pages/PetList.vue";
import UserList from "./pages/UserList.vue";
import UserDetail from "./pages/UserDetail.vue";
// import NotFound from "./pages/NotFound.vue";
const routes = [
  {
    path: "/users",
    component: UserList,
  },
  {
    path: "/users-detail",
    component: UserDetail,
  },
  {
    path: "/pets",
    component: PetList,
  },
  { path: "/:pathMatch(.*)*", redirect: "/users" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});
export default router;
