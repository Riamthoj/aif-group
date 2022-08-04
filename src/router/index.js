import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null
      if (token) next()
      else next({ path: '/' })
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/aif/auth",
        name: "auth",
        component: () => import("@/views/Auth.vue"),
      },
      {
        path: "/aif/auth/add",
        name: "authAdd",
        component: () => import("@/views/AuthAdd.vue"),
      },
      {
        path: "/aif/about",
        name: "about",
        component: () => import("@/views/About.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "signin",
    component: () => import("@/views/Signin.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
