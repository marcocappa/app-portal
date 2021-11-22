import { formatDate } from "./utils";

test("formatDate", () => {
  const date = "2021-12-02";

  expect(formatDate(date)).toBe("2nd December 2021");
});
