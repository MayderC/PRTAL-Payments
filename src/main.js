import { formatDate } from "./assets/helpers/FormatDate";
import { FixCurrency } from "./assets/helpers/FixCurrency";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
Vue.config.productionTip = false;

Vue.filter("currency", FixCurrency);
Vue.filter("date", formatDate);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
