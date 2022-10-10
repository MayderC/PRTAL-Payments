<template>
  <div class="main">
    <AppPayment></AppPayment>
    <AppEditStatus class="app-edit" v-if="canShowModalEdit"></AppEditStatus>
    <div v-if="canShowModalEdit" class="shadow"></div>
  </div>
</template>

<script>
import AppPayment from "./components/AppPayment/AppPayment.vue";
import AppEditStatus from "./components/AppPayment/AppEditStatus.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { AppPayment, AppEditStatus },
  computed: {
    ...mapState(["canShowModalEdit"]),
  },
};
</script>

<style>
@import "./assets/styles/common.css";
@import "./assets/styles/variables.css";

body {
  background-color: #f5f5f5;
  min-height: 100vh;
  margin: 0;
}

.main {
  min-height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000b6;
}

.app-edit {
  position: absolute;
}

#app {
  font-family: Inter;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
