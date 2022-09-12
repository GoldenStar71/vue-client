import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
// @ts-ignore
import Index from "../views/Index.vue"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  
  {
    path: "/panno",
    name: "panno",
    component: () =>
      import("../views/PannoView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
