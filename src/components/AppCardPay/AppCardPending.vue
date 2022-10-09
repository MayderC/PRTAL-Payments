<template>
  <div class="card">
    <div :class="[index != 0 ? 'circle' : 'border-first' ,'pending-circle']">
      <div v-if="payment.status == paymentStatus.pending" @click="showModalEdit" class="edit">
        <img src="../../assets/imgs/edit-icon.svg" alt=""/>
      </div>
    </div>
    <p class="name">{{ payment.name }}</p>
    <div class="price">
      <p>{{ payment.price | currency }}</p>
      <span>({{ payment.price * (30 / 100) }} %)</span>
    </div>
    <p class="date">{{ payment.date | date }}</p>
  </div>
</template>
<script>
import { PAYMENT_STATUS } from '@/common/constants';

export default {
  name: "AppCradPending",
  props: {
    payment: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data(){
   return {
    paymentStatus : PAYMENT_STATUS
   }
  },
  methods: {
    overPending(){
      console.log("ASxsd")
    },
    showModalEdit(){
      console.log("SAXsdds")
    }
  }
};
</script>
<style scoped>
.border-first {
  width: 48px;
  height: 48px;
  border: solid 3px var(--blue);
  border-radius: 100%;
}

.name {
  font-weight: 600;
  font-size: 20px;
}

.price {
  display: flex;
  font-size: 14px;
}

.price p {
  font-weight: 600;
}

.edit{
  display: none;
  width: 100%;
  height: 100%;

}
.pending-circle:hover .edit{
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
