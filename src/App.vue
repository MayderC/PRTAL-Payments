<template>
  <div class="main">
    <AppPayment></AppPayment>
    <AppEditStatus></AppEditStatus>
  </div>
</template>

<script>
import AppPayment from "./components/AppPayment/AppPayment.vue";
import AppEditStatus from "./components/AppPayment/AppEditStatus.vue";

export default {
  name: "App",
  components: { AppPayment, AppEditStatus },
};
</script>

<style>
@import "./assets/styles/common.css";
@import "./assets/styles/variables.css";

body {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

#app {
  font-family: Inter;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
