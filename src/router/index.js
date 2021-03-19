import Vue from "vue";
import VueRouter from "vue-router";
import JourneysIndex from "../views/JourneysIndex.vue";
import Signup from "../views/Signup.vue";
import OrdersIndex from "../views/OrdersIndex.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import AdventuresIndex from "../views/AdventuresIndex.vue";
import AdventuresShow from "../views/AdventuresShow.vue";
import AdventuresEdit from "../views/AdventuresEdit.vue";
import HelpfulHints from "../views/HelpfulHintsIndex.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/journeys",
    name: "journeys-index",
    component: JourneysIndex,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/orders",
    name: "orders-index",
    component: OrdersIndex,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/adventures",
    name: "adventures-index",
    component: AdventuresIndex,
  },
  {
    path: "/adventures/:id",
    name: "adventures-show",
    component: AdventuresShow,
  },
  {
    path: "/adventures/:id/edit",
    name: "adventures-edit",
    component: AdventuresEdit,
  },
  {
    path: "/helpful_hints",
    name: "helpfulhints-index",
    component: HelpfulHints,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
