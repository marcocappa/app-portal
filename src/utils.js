import { format } from "date-fns";
export const FORMAT_DATE = "do MMMM yyyy";

export const formatDate = (date) => format(new Date(date), FORMAT_DATE);
