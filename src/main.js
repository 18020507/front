import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import FunctionalCalendar from 'vue-functional-calendar';
Vue.use(FunctionalCalendar, {
    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);

Vue.use(require('vue-moment'));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
