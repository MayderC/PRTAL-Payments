<template>
  <div class="main">
    <AppPayment></AppPayment>
  </div>
</template>

<script>
import AppPayment from './components/AppPayment.vue';

export default {
    name: "App",
    components: { AppPayment }
}
</script>

<style>

*::after, *::before, *{
  box-sizing: border-box;
}

body{
  background-color: #F5F5F5;
  min-height: 100vh;
  margin: 0;
}

.main{
  min-height: 100vh;
  display: grid;
  place-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
