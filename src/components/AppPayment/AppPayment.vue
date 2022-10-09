<template>
  <div class="payment">
    <AppPaymentTopbar
      :total="182"
      @can:edit="canEdit = !canEdit"
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
    </div>
  </div>
</template>

<script>
import AppPaymentTopbar from "./AppPaymentTopbar.vue";
import AppCarPay from "../AppCardPay/AppCarPay.vue";
import { mapMutations, mapState } from "vuex";
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
    this.copyEdit = this.paymentsEdit;
    this.currentArr = this.payments;
    this.updatePayments();
    this.setPayCurrent();
  },

  computed: {
    ...mapState(["payments", "paymentsEdit", "currentArr"]),
  },
  components: { AppPaymentTopbar, AppCarPay },
  methods: {
    ...mapMutations(["updatePayments", "setPayCurrent", "setEditCurrent"]),
    save() {
      this.canEdit = false;
      this.updatePayments();
      //this.currentArr = JSON.parse(JSON.stringify(this.payments));
      this.setPayCurrent();
    },
    editeAfterCreate() {
      this.canEdit = true;
      this.copyEdit = this.payments;
      //this.currentArr = this.paymentsEdit;
      this.setEditCurrent();
    },
  },
};
</script>

<style>
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
