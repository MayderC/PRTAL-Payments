<template>
  <div class="card-container">
    <div class="line-left"></div>
    <AppCardEditing
      v-if="canEdit && payment.status != status.paid"
      :index="index"
      :payment="payment"
    ></AppCardEditing>
    <AppCardPending v-else :index="index" :payment="payment"></AppCardPending>
    <div class="line-rigth"></div>
    <div class="add" @click="addPayment">
      <img src="../../assets/imgs/Icon-add.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import AppCardPending from "./AppCardPending.vue";
import AppCardEditing from "./AppCardEditing.vue";
import { mapMutations } from "vuex";
import { createPayment } from "@/helpers/createPayment";
import { PAYMENT_STATUS } from "@/common/constants";

export default {
  name: "AppCardPay",
  props: {
    canEdit: {
      type: Boolean,
    },
    payment: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      status: PAYMENT_STATUS,
    };
  },
  components: { AppCardPending, AppCardEditing },
  computed: {},
  methods: {
    ...mapMutations(["savePayment"]),
    addPayment() {
      if (this.canEdit) return;
      const pay = createPayment("", 0, 0);
      const payload = {
        pay,
        index: this.index,
      };
      console.log(payload.pay)
      this.savePayment(payload);
      this.$emit("pay:created");
    },

    addItem(){

    }
  },
};
</script>
<style>
.card {
  width: 200px;
  min-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.circle {
  width: 48px;
  height: 48px;
  background: var(--ligth);
  border-radius: 100%;
}

.card-container {
  position: relative;
}

.add {
  position: absolute;
  top: 10px;
  right: -18px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e2e8f0;
  z-index: 9;
}
</style>
