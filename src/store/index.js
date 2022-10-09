import Vue from "vue";
import Vuex from "vuex";
import { PAYMENT_STATUS } from "./../common/constants/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editeCardStatus: "pending",
    modalEditIndex: null,
    canShowModalEdit: false,
    currentArr: [],
    payments: [
      {
        id: Date.now(),
        name: "inicio",
        price: 200,
        date: Date.now(),
        status: PAYMENT_STATUS.pending,
      },
    ],
    paymentsEdit: [
      {
        id: Date.now(),
        name: "inicio",
        price: 200,
        date: Date.now(),
        status: PAYMENT_STATUS.pending,
      },
    ],
  },
  getters: {},
  mutations: {
    savePayment(state, payload) {
      state.payments.splice(payload.index + 1, 0, payload.pay);
      state.paymentsEdit = JSON.parse(JSON.stringify(state.payments));
    },
    updatePayments(state) {
      state.payments = JSON.parse(JSON.stringify(state.paymentsEdit));
    },
    setEditIndex(state, index) {
      state.modalEditIndex = index;
    },
    setCanShowModal(state, value) {
      state.canShowModalEdit = value;
    },

    deleteItemPaymentsEdit(state, index) {
      state.paymentsEdit.splice(index, 1);
      state.payments = JSON.parse(JSON.stringify(state.paymentsEdit));
    },

    setPayCurrent(state) {
      state.currentArr = state.payments;
    },
    setEditCurrent(state) {
      state.currentArr = state.paymentsEdit;
    },
  },

  actions: {},
  modules: {},
});
