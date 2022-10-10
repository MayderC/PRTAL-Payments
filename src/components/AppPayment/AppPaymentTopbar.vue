<template>
  <div class="payment__topbar">
    <div class="payment__left">
      <p>Price</p>
      <div><img src="../../assets/imgs/arrow-down.svg" alt="" /></div>
    </div>
    <div class="payment__rigth">
      <button
        v-if="canEdit == false"
        @click="$emit('can:edit')"
        class="payment__rigth--edit"
      >
        <p>Edit</p>
        <div><img src="../../assets/imgs/edit-icon.svg" alt="" /></div>
      </button>
      <AppButton v-else @on-click="updatePaids" text="Guardar"></AppButton>
      <div class="payment__rigth--info-total">
        <p>
          Por cobrar <span> {{ total | currency }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppButton from "../AppButton.vue";
export default {
  name: "AppPaymentTopbar",
  props: {

    canEdit: {
      type: Boolean,
    },
  },
  components: { AppButton },

  computed: {
    ...mapState(['total'])
  },

  methods: {
    updatePaids() {

      //boton global edit, se abre la posibilidad de atualizar, cualquier elemento, con el status pendiente.

      // @todo: api request update, actualizar todos los elemetos. 
      // o crear algoritmo, verificar cuales fueron modificados y actualizar solo estos. 
      this.$emit("save:paid");
    },
  },
};
</script>
<style scoped>
.payment__topbar {
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: var(--blue);
}

.payment__left,
.payment__rigth {
  display: flex;
  gap: 14px;
  font-size: 1rem;
  font-weight: 600;
}

.payment__left > *,
.payment__rigth > * {
  user-select: none;
}

.payment__rigth button {
  cursor: pointer;
}

.payment__rigth--edit {
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.payment__rigth--edit div {
  position: relative;
}

.payment__rigth--edit img {
  position: relative;
  top: 1px;
  width: 16px;
  height: 16px;
}

.payment__rigth--info-total {
  display: flex;
  align-items: center;
}
.payment__rigth--info-total p {
  color: var(--gray);
}
.payment__rigth--info-total p > span {
  color: rgb(0, 0, 0);
}

button {
  background: none;
  border: none;
  font-family: Inter;
  color: var(--blue);
  transition: transform 0.2s;
}
</style>
