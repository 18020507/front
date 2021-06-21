import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/SignIn.vue";
import MainCinema from "./views/MainCinema.vue";
import Movie from "./views/Movie.vue"
import MovieInfo from "./views/MovieInfo.vue";
import BuyTicket from "./views/BuyTicket.vue";
import Payment from "./views/Payment.vue";
import AddShow from "./views/AddShow.vue"

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
    {
      path: "/movie",
      name: "movie",
      component: Movie,
    },
    {
      path: "/movieinfo/:id",
      name: "movieinfo",
      component: MovieInfo
    },
    {
      path: "/buyticket",
      name: "buyticket",
      component: BuyTicket
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    },
    {
      path: "/addshow",
      name: "addshow",
      component: AddShow
    },
  ],
});
