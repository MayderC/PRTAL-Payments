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
        status: PAYMENT_STATUS.pending,
      },
    ],
    paymentsEdit: [
      {
        id: Date.now(),
        name: "inicio",
        price: 200,
        status: PAYMENT_STATUS.pending,
      },
    ],
  },
  getters: {},
  mutations: {

    // inserta un nuevo item, en la posicion especificada.
    savePayment(state, payload) {
      state.payments.splice(payload.index + 1, 0, payload.pay);
      state.paymentsEdit = JSON.parse(JSON.stringify(state.payments));
    },

    // actualiza, payments con los nuevos datos del array modificado.
    updatePayments(state) {
      state.payments = JSON.parse(JSON.stringify(state.paymentsEdit));
    },

    //Modal edit
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

    // cambia, del array actual mostrado, show / edit
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
