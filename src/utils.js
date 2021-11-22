import { format } from "date-fns";
export const FORMAT_DATE = "do MMMM yyyy";

export const formatDate = (date) => format(new Date(date), FORMAT_DATE);

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
});

export const formatCurrency = (n) => formatter.format(n);
