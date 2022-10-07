<template>

  <div class="payment">
    <div class="payment__topbar">
      <div class="payment__left">
        <p>Price</p>
      </div>
      <div class="payment__rigth"></div>
    </div>
    <div class="payment__body">

    </div>
  </div>

</template>

<script>
  export default {
    
    name: "AppPayment"
    
  }
</script>

<style>

  .payment{
    background: #Fff;
    height: 274px;
    width: 848px;
    box-shadow: 0px 1px 0px #E2E8F0;
    border-radius: 8px;
  }
  
  .payment__topbar{
    padding: 24px;
    height: 76px;
    /*border-bottom: 1px solid #F1F5F9;*/
    border-bottom: 1px solid #3470ab;
    width: 100%;
  }

</style>