<template>
  <div class="modal">
    <p class="modal__title">Modificar Estado de {{ Mypayment.name }}</p>
    <p class="modal__sub">
      Selecciona el estado en el que se encuentra el pago
    </p>
    <p class="text-before-drop text-color">Estado</p>
    <div class="dropdown">
      <button @click="canShowMenu = !canShowMenu" class="btn" type="button">
        <p>{{ Mypayment.status == status.pending ? "Pendiente" : "Pagado" }}</p>
        <img src="../../assets/imgs/select-arrow.svg" alt="" />
      </button>
      <ul
        v-if="canShowMenu"
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <li @click="setStatus(status.pending)"><p>Pendiente</p></li>
        <li @click="setStatus(status.paid)"><p>Pagado</p></li>
      </ul>
      <div v-if="canShowDate" class="date">
        <label class="text-color" for="">Fecha de pago</label>
        <input v-model="paidDate" type="date" />
      </div>
      <footer class="footer-btns">
        <div @click="deletePayment" class="delete">
          <img src="../../assets/imgs/detele-icon.svg" alt="" />
        </div>
        {{paidDate | date}}
        <div class="save">
          <AppButton @on-click="saveUpdate" text="Guardar"></AppButton>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { PAYMENT_STATUS } from "@/common/constants";
import { mapMutations } from "vuex";
import AppButton from "../AppButton.vue";

export default {
  name: "AppEditStatus",
  data() {
    return {
      status: PAYMENT_STATUS,
      canShowMenu: false,
      canShowDate: false,
      paidDate: ""
    };
  },
  computed: {
    Mypayment: {
      get() {
        return this.$store.state.paymentsEdit[this.indexEdit];
      },
    },
    indexEdit: {
      get() {
        return this.$store.state.modalEditIndex;
      },
    },
  },
  watch: {
    "Mypayment.status"() {
      this.canShowDate =
        this.Mypayment.status == this.status.paid ? true : false;
    },
  },
  methods: {
    ...mapMutations([
      "deleteItemPaymentsEdit",
      "setEditIndex",
      "setCanShowModal",
      "setPayCurrent",
      "updatePayments"
    ]),
    setStatus(value) {
      this.canShowMenu = false;
      this.Mypayment.status = value;
    },
    deletePayment() {
      this.deleteItemPaymentsEdit(this.indexEdit);
      this.setEditIndex(null);
      this.setCanShowModal(false);
      this.setPayCurrent();
    },
    saveUpdate(){
      this.paidDate = new Date(this.paidDate)
      this.Mypayment.date = this.paidDate.setDate(this.paidDate.getDate() + 1);
      this.updatePayments()
      this.setEditIndex(null)
      this.setCanShowModal(false)
      this.setPayCurrent()

    }
  },
  components: { AppButton },
};
</script>

<style scoped>
.modal {
  font-family: "Inter";
  width: 593px;
  min-height: 258px;
  background: #ffffff;
  /* Shadow (Border Bottom) */
  box-shadow: 0px 1px 0px #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  z-index: 99;
}

.modal .modal__title {
  font-weight: 600;
  font-size: 23px;
  color: #0f172a;
}

.modal .modal__sub {
  font-weight: 400;
  font-size: 16px;
  color: #0f172a;
  margin-top: 16px;
}

.status {
  height: 44px;
  width: 200px;

  /* Shades/White */

  background: #ffffff;
  /* Neutral / Gray 300 */
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

.text-before-drop {
  margin-top: 16px;
}
.dropdown button {
  margin-top: 5px;
  height: 44px;
  width: 200px;
  text-align: left;
  /* Shades/White */
  padding: 12px;
  background: #ffffff;
  /* Neutral / Gray 300 */
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
.dropdown .btn {
  font-weight: 400;
  font-size: 14px;
}

.btn {
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.dropdown-menu {
  margin-top: 8px;
  width: 130px;
  background: #ffffff;
  border: 0.5px solid #cbd5e1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  list-style: none;
  padding: 0;
  color: #64748b;
  padding: 16px 0px;
  position: absolute;
}
.dropdown-menu li {
  width: 130px;
  padding: 16px;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background: #e8edfb;
  color: var(--blue);
}
.date {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 12px;
}

.text-color {
  color: #475569;
}
.date input {
  height: 44px;
  width: 200px;
  /* Shades/White */

  background: #ffffff;
  /* Neutral / Gray 300 */

  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 16px;
  margin-top: 5px;
}

.footer-btns {
  display: flex;
  gap: 27px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
}

.delete {
  cursor: pointer;
}

.delete:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
