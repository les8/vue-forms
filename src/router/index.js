import { createRouter, createWebHistory } from "vue-router";
import CreateView from "../views/CreateView.vue";

const routes = [
  {
    path: "/",
    name: "create",
    component: CreateView,
  },
  {
    path: "/upgrade",
    name: "upgrade",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpgradeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
