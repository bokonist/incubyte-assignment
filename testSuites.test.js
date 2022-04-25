const Add = require("./index");

describe("TEST set 1 - simple comma separated numbers, empty strings", () => {
  it("empty string", () => {
    expect(Add("")).toBe(0);
  });
});
