<template>
  <div class="payment">
    <AppPaymentTopbar :total="total" />
    <div class="payment__body">
      <AppCarPay />
    </div>
  </div>
</template>

<script>
import AppPaymentTopbar from "./AppPaymentTopbar.vue";
import AppCarPay from "../AppCardPay/AppCarPay.vue";
export default {
  name: "AppPayment",
  props: {
    total: {
      type: Number,
      requerid: true,
    },
  },
  components: { AppPaymentTopbar, AppCarPay },
};
</script>

<style>
.payment {
  background: #fff;
  height: 274px;
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
  padding: 0 24px 24px 24px;
  height: calc(100% - 76px);
  font-family: Inter;
}

@media (max-width: 886px) {
  .payment {
    width: 100%;
  }
}
</style>
