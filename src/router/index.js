import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";
import Q1 from "../views/Q1.vue";
import Q2 from "../views/Q2.vue";
import Q3 from "../views/Q3.vue";
import Q4 from "../views/Q4.vue";
import Q5 from "../views/Q5.vue";
import Q6 from "../views/Q6.vue";
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
    props: true,
  },
  {
    path: "/q3",
    name: "Q3",
    component: Q3,
    props: true,
  },
  {
    path: "/q4",
    name: "Q4",
    component: Q4,
    props: true,
  },
  {
    path: "/q5",
    name: "Q5",
    component: Q5,
    props: true,
  },
  {
    path: "/q6",
    name: "Q6",
    component: Q6,
    props: true,
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
