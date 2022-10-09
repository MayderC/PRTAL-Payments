import Vue from "vue";
import Vuex from "vuex";
import { PAYMENT_STATUS } from './../common/constants/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editeCardStatus: "pending",
    payments: [
      { id: Date.now(), name: "inicio", price: 200, date: Date.now(), status: PAYMENT_STATUS.pending },
    ],
    paymentsEdit : [
      { id: Date.now(), name: "inicio", price: 200, date: Date.now(),  status: PAYMENT_STATUS.pending }
    ]
  },
  getters: {},
  mutations: {
    savePayment(state, payload) {
      state.payments.splice(payload.index + 1, 0, payload.pay);
      state.paymentsEdit = JSON.parse(JSON.stringify(state.payments))
    },

    updatePayments(state){
      state.payments = JSON.parse(JSON.stringify(state.paymentsEdit))
    }



  },

  actions: {},
  modules: {},
});
