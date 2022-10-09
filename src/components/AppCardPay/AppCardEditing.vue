<template>
  <div class="card">
    <div class="circle"></div>
    <input class="name" type="text" v-model="Mypayment.name" />
    <input class="price" :placeholder="pricePlaceHolder" type="text" />
  </div>
</template>
<script>
import { CURRENCY_FORMAT } from "@/common/constants";

export default {
  name: "AppCradEditing",
  props: {
    payment: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      pricePlaceHolder: CURRENCY_FORMAT.currency,
      modelPayment: {},
    };
  },


  computed: {
    Mypayment: {
      get() {
        return this.$store.state.paymentsEdit[this.index];
      }
    },
  },
};
</script>
<style scoped>
.circle {
  width: 48px;
  height: 48px;
  border: solid 3px var(--blue);
  border-radius: 100%;
}

.card {
  gap: 10px;
}

input {
  width: 116px;
  height: 24px;
  outline: none;
  border: 0.5px solid #94a3b8;
  border-radius: 3px;
}

.name {
  font-weight: 600;
  font-size: 20px;
}

.price::placeholder {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */

  text-align: right;

  /* Neutral / Gray 400 */

  color: #94a3b8;
}
</style>
