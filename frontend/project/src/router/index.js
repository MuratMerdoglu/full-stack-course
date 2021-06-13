import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserCreate from "../views/UserCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,

  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/create",
    component: UserCreate,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
