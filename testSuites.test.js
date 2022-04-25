const Add = require("./index");

describe("TEST set 1 - simple comma separated numbers, empty strings", () => {
  it("empty string", () => {
    expect(Add("")).toBe(0);
  });
  it("one single digit number", () => {
    expect(Add("1")).toBe(1);
  });
  it("one multi digit number ", () => {
    expect(Add("12")).toBe(12);
  });
  it("two numbers, first one missing", () => {
    expect(Add(",12")).toBe(12);
  });

  it("two numbers, second one missing", () => {
    expect(Add("12,")).toBe(12);
  });

  it("two numbers", () => {
    expect(Add("12,13")).toBe(25);
  });

  it("multiple numbers, many are missing", () => {
    expect(Add("12,,,,,,,13")).toBe(25);
  });

  it("multiple numbers", () => {
    expect(Add("1,2,3,4,50")).toBe(60);
  });
});
