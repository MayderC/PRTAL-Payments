
import Vue from "vue";
import Vuex from "vuex";
import { PAYMENT_STATUS, TOTAL } from "./../common/constants/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editeCardStatus: "pending",
    modalEditIndex: null,
    canShowModalEdit: false,
    currentArr: [],
    total : TOTAL,
    payments: [
      {
        id: Date.now(),
        name: "inicio",

        price: 50,
        status: PAYMENT_STATUS.pending,
      },
    ],
    paymentsEdit: [
      {
        id: Date.now(),

        name: "inicio",
        price: 50,
        status: PAYMENT_STATUS.pending,
      },
    ],
  },
  getters: {
    sumPricesPay(state){
      return state.payments.reduce((acc, curr) => acc += curr.price , 0)
    },
    remaining(state, getters){
      return TOTAL - getters.sumPricesPay
    }
  },
  mutations: {

    // inserta un nuevo item, en la posicion especificada.
    savePayment(state, payload) {

      state.paymentsEdit.splice(payload.index + 1, 0, payload.pay);
    },

    // actualiza, payments con los nuevos datos del array modificado.
    updatePayments(state) {
      state.payments = state.paymentsEdit
      state.paymentsEdit = JSON.parse(JSON.stringify(state.payments))
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

    //total 1
    addByOneTotal(state){
      state.total = state.total +1
    },
    substraByOneTotal(state){
      state.total = state.total -1
    },

    //total cantidad
    addMountTotal(state, value){
      state.total = state.total + value
    },

    substraMountTotal(state, value){
      state.total = state.total - value
    }


  },

  actions: {},
  modules: {},
});
