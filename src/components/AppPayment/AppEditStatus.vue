<template>
  <div class="modal">
    <p class="modal__title">Modificar Estado</p>
    <p class="modal__sub">Selecciona el estado en el que se encuentra el pago</p>
    <form @submit.prevent>
      <label for="">Estado</label>
      <select class="status" name="" id="">
        <option :value="status.editing">Por pagar</option>
        <option :value="status.pending">Pagado</option>
      </select>
    </form>
  </div>
</template>

<script>
import { PAYMENT_STATUS } from '@/common/constants';

export default {
  name: "AppEditStatus",
  data(){
    return {
      status : PAYMENT_STATUS
    }
  }
};
</script>

<style scoped>

  .modal {
    font-family: 'Inter';
    width: 593px;
    height: 258px;
    background: #FFFFFF;
    /* Shadow (Border Bottom) */
    box-shadow: 0px 1px 0px #E2E8F0;
    border-radius: 8px;
    padding: 24px;
  }


  .modal .modal__title {
    font-weight: 600;
    font-size: 23px;
  }

  .modal .modal__sub{
    font-weight: 400;
    font-size: 16px;
    color: #0F172A;
    margin-top: 16px;
  }

  .status{
    height: 44px;
    width: 200px;

    /* Shades/White */

    background: #FFFFFF;
    /* Neutral / Gray 300 */
    outline: none;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
  }

  form{
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }

</style>
