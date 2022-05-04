const Add = require('./index');

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

describe("TEST set 3 - new additional delimiter", () => {
  it("two numbers,custom separated", () => {
    expect(Add("//;\n25;25")).toBe(50);
  });
  it("multple numbers, multiple missing, newline, comma and custom separated", () => {
    expect(Add("//;\n25;25,25\n25\n\n;;;,1,2,3")).toBe(106);
  });
});
describe("TEST set 4 - negative and non-numbers", () => {
  it("one negative number", () => {
    expect(() => {
      Add("-1");
    }).toThrow("negatives not allowed: -1");
    // expect(Add("-1")).toBe(-1);
  });
  it("even number of negatives", () => {
    expect(Add("-1,-2")).toBe(-3);
  });
  it("odd number of negative", () => {
    expect(() => Add("-1,-2,-3")).toThrow("negatives not allowed: -1,-2,-3");
  });
  it("multiple delimeted negative numbers", () => {
    expect(() => {
      Add("//;\n-25;25,25\n25\n\n;;;,-1,-2,3");
    }).toThrow("negatives not allowed: -25,-1,-2");
  });
  it("one invalid number", () => {
    expect(() => {
      Add("abc");
    }).toThrow("Invalid numbers passed: abc");
  });
  it("multiple delimeted non-numbers", () => {
    expect(() => {
      Add("//;\nabc;25,25\n25\n\n;;;,a,b,c");
    }).toThrow("Invalid numbers passed: abc,a,b,c");
  });
});
describe("TEST SET 5 - ignore numbers", () => {
  it("ignore numbers gt than thousand", () => {
    expect(Add("1,2,1001")).toBe(3);
  });
  it("include 1000", () => {
    expect(Add("1,2,1000")).toBe(1003);
  });
});
