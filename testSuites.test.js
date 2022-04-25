const Add = require("./index");

describe("TEST set 1 - simple comma separated numbers, empty strings", () => {
  it("empty string", () => {
    expect(Add("")).toBe(0);
  });
  it("one single digit number", () => {
    expect(Add("1").toBe(1));
  });
  it("one multi digit number ", () => {
    expect(Add("12").toBe(12));
  });
});
