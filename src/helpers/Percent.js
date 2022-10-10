import { TOTAL } from "@/common/constants";


export const valueFromPercent = (percent) => (TOTAL *(percent / 100)).toFixed(1)
export const percentFromValue = (value) => (value / (TOTAL / 100)).toFixed(1)