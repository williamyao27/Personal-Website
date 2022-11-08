import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About Me",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/terrarium",
    name: "Terrarium",
    component: () => import("../views/TerrariumView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
