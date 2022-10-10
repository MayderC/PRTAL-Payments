<template>
  <div class="card">
    <div class="circle"></div>
    <input class="name" type="text" v-model="Mypayment.name" />
    <input class="price" v-model.number="Mypayment.price" :placeholder="pricePlaceHolder" type="number" />
    <div class="percent">
      <button @click="sumPercent">+</button>
      <p>{{Mypayment.price | percent}} %</p>
    <button @click="substracPercent">-</button>
    </div>

  </div>
</template>
<script>
import { CURRENCY_FORMAT } from "@/common/constants";
import { valueFromPercent } from "@/helpers/Percent";
import { mapGetters } from "vuex";


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
    ...mapGetters(['sumPricesPay', 'remaining']),
    Mypayment: {
      get() {
        return this.$store.state.paymentsEdit[this.index];
      }
    },
  },

  methods: {
    sumPercent(){
      this.Mypayment.price  = this.Mypayment.price + 1
      this.Mypayment.percent = valueFromPercent(this.Mypayment.price)

      //sumar, restar item siguiente si esta pendiente, y si este es indice 0,
      //restar anterior, si esta pendiete, y este indice es mayor a 0

    },
    substracPercent(){
      this.Mypayment.price = this.Mypayment.price - 1
      this.Mypayment.percent = valueFromPercent(this.Mypayment.price)

      ///restar, sumar item siguiente si esta pendiente, y si este es indice 0,
      //sumar anterior, si esta pendiete, y este indice es mayor a 0

    },

  }

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

.price{
  font-weight: 600;
  font-size: 14px;
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
