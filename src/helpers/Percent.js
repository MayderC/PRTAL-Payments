import store from "@/store";

export const valueFromPercent = (percent) => (store.state.total *(percent / 100)).toFixed(1)
export const percentFromValue = (value) => (value / (store.state.total / 100)).toFixed(1)