import { convertISODate } from "../../../utils/date/main";

describe("Unit tests for date utils", () => {
  it("Should return undefined when no date is passed", () => {
    expect(convertISODate(null)).toBe(undefined);
  });

  it("Should return a date in the format dd/mm/yyyy", () => {
    const dateISOFormat = "2020-10-24T11:31:00-04:00";

    expect(convertISODate(dateISOFormat)).toBe("2020-10-24");
  });
});
