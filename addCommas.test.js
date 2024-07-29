const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it handles positive integers", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1234567)).toBe("1,234,567");
    expect(addCommas(1234567890)).toBe("1,234,567,890");
  });

  test("it handles negative integers", () => {
    expect(addCommas(-1234)).toBe("-1,234");
    expect(addCommas(-1234567)).toBe("-1,234,567");
    expect(addCommas(-1234567890)).toBe("-1,234,567,890");
  });

  test("it handles small decimal numbers", () => {
    expect(addCommas(1234.56)).toBe("1,234.56");
    expect(addCommas(1234567.89)).toBe("1,234,567.89");
    expect(addCommas(1234567890.12)).toBe("1,234,567,890.12");
  });
});
