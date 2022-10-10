import { PAYMENT_STATUS } from "../common/constants/index";
import { percentFromValue } from "./Percent";


export const createPayment = (name, price) => {
  return {
    id: Date.now(),
    name: name,
    date: new Date().getTime(),
    price: price,
    percent: percentFromValue(price),
    status: PAYMENT_STATUS.pending,
  };
};
