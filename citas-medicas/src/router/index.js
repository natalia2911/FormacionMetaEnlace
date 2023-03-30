import { createRouter, createWebHistory } from "vue-router";
import store from "../store/store";
import Home from "../view/HomeC.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Login from "../view/Login.vue";
import Menu from "../components/modules/MenuC.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters.user != null) {
        next({ name: "home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/hello",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(store);
    console.log("this.$store.getters.user", store.getters.user);
    if (store.getters.getUser == null) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next(); 
    }
  } else {
    next();
  }
});

export default router;
