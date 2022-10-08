import Vue from "vue";
import App from "./App.vue";
import { FixCurrency } from "./assets/helpers/FixCurrency";
Vue.config.productionTip = false;

Vue.filter("currency", FixCurrency);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
