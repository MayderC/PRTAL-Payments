<template>
  <div @click="$emit('on-click')" class="container">{{ text }}</div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      requerid: true,
    },
  },
};
</script>
<style scoped>
.container {
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 6px;

  width: 73px;
  height: 34px;

  background: var(--blue);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
}

.container:hover {
  background: var(--blue-h);
}
</style>
