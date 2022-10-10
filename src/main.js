import { formatDate } from "./helpers/FormatDate";
import { FixCurrency } from "./helpers/FixCurrency";
import { percentFromValue, valueFromPercent } from "./helpers/Percent";

import Vue from "vue";
import App from "./App.vue";
import store from "./store";


Vue.config.productionTip = false;

Vue.filter("currency", FixCurrency);
Vue.filter("date", formatDate);
Vue.filter('percent', percentFromValue)
Vue.filter('value', valueFromPercent)

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
