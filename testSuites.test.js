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

describe("TEST set 2 - comma and newline separated numbers", () => {
  it("two numbers, newline separated, first one missing", () => {
    expect(Add("\n12")).toBe(12);
  });

  it("two numbers, newline separated,  second one missing", () => {
    expect(Add("12\n")).toBe(12);
  });

  it("two numbers, newline separated", () => {
    expect(Add("12\n13")).toBe(25);
  });

  it("multiple numbers, newline separated, many are missing", () => {
    expect(Add("12\n\n\n\n1\n\n13")).toBe(26);
  });

  it("multiple numbers, newline and comma separated, many are missing", () => {
    expect(Add("12\n,\n,1\n,13,,,,\n\n\n2")).toBe(28);
  });
  it("multiple numbers, newline separated", () => {
    expect(Add("1\n2\n3\n4\n50")).toBe(60);
  });

  it("multiple numbers, newline+comma separated", () => {
    expect(Add("1\n2,3\n4,50")).toBe(60);
  });
});
