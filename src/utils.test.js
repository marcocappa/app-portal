import { formatDate, formatCurrency } from "./utils";

test("formatDate", () => {
  const date = "2021-12-02";
  expect(formatDate(date)).toBe("2nd December 2021");
});

test("formatCurrency", () => {
  const currency = 1000;
  expect(formatCurrency(currency)).toBe("£1,000.00");
});
