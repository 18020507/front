import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/SignIn.vue";
import MainCinema from "./views/MainCinema.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/sign_in",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/",
      name: "mainCinema",
      component: MainCinema,
    },
  ],
});
