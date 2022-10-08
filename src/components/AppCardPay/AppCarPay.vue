<template>
  <div class="card">
    <div class="circle"></div>
    <p>Name</p>
    <p>Percio</p>
  </div>
</template>

<script>
export default {
  name: "AppCardPay",
  data() {
    return {
      statusIntern: ["pending", "editing", "paid"],
    };
  },
};
</script>

<style>
.card {
  width: 150px;
}

.circle {
  width: 48px;
  height: 48px;
  border: solid 3px var(--blue);
  border-radius: 100%;
}
</style>
