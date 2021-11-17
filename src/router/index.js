import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";
import Q1 from "../views/Q1.vue";
import Q2 from "../views/Q2.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/q1",
    name: "Q1",
    component: Q1,
  },
  {
    path: "/q2",
    name: "Q2",
    component: Q2,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
