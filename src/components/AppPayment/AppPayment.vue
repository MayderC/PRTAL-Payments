<template>
  <div class="payment">
    <AppPaymentTopbar
      :total="182"
      @can:edit="editAll"
      @save:paid="save"
      :canEdit="canEdit"
    />
    <div class="payment__body">
      <AppCarPay
        v-for="(item, index) in currentArr"
        :payment="item"
        @pay:created="editeAfterCreate"
        :key="item.id"
        :canEdit="canEdit"
        :index="index"
      />
      <div v-if="currentArr.length == 0" class="card-add">
      <div class="add-item" @click="addItem">
        <img src="../../assets/imgs/Icon-add.svg" alt="">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import AppPaymentTopbar from "./AppPaymentTopbar.vue";
import AppCarPay from "../AppCardPay/AppCarPay.vue";
import { mapMutations, mapState } from "vuex";
import {createPayment}  from '@/helpers/createPayment'

export default {
  name: "AppPayment",
  props: {
    total: {
      type: Number,
      requerid: true,
    },
  },
  data() {
    return {
      canEdit: false,
      copyEdit: [],
    };
  },

  created() {
    this.setPayCurrent();
  },

  computed: {
    ...mapState(["payments", "paymentsEdit", "currentArr"]),
  },
  components: { AppPaymentTopbar, AppCarPay },
  methods: {
    ...mapMutations(["updatePayments", "setPayCurrent", "setEditCurrent", "savePayment"]),
    save() {
      this.canEdit = false;
      this.updatePayments();
      this.setPayCurrent();
    },
    editeAfterCreate() {
      this.canEdit = true;
      this.setEditCurrent();
    },
    editAll(){
      this.canEdit = true
      this.setEditCurrent()
    },
    addItem(){
      console.log("aaa")
      const pay = createPayment("", 0);
      const payload = {
        pay,
        index: this.index,
      };
      this.savePayment(payload);
      this.canEdit = true
    }
  },
};
</script>

<style>

.card-add{
  width: 200px;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-item{
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment {
  background: #fff;
  width: 848px;
  box-shadow: 0px 1px 0px #e2e8f0;
  border-radius: 8px;
}

.payment__topbar {
  padding: 24px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f5f9;
  width: 100%;
}

.payment__body {
  padding: 24px 24px 24px 24px;
  height: calc(100% - 76px);
  font-family: Inter;
  overflow-x: scroll;
  display: flex;
}

@media (max-width: 886px) {
  .payment {
    width: 100%;
  }
}
</style>
