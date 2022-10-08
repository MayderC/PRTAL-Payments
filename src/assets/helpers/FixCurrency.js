import {
  CURRENCY_FORMAT,
  FORMAT_OPTIONS,
} from "./../../common/constants/index";

export const FixCurrency = (value) => {
  const num = Number(value);
  return isNaN(num)
    ? `${0 + " " + CURRENCY_FORMAT.currency}`
    : new Intl.NumberFormat(CURRENCY_FORMAT.locale, FORMAT_OPTIONS).format(num);
};
