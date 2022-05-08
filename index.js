const Add = (s) => {
  if (s === "") {
    return 0;
  }

  let delimiter = "";
  let paramString = s;
  let delimiterExp = /[\n,]+/;
  let customDelimiter;
  let sum = 0;
  const negativeArr = [];
  const invalidNums = [];

  if (/^[/]{2}.\n/.test(s)) {
    customDelimiter = s.charAt(2);
    delimiter = `[\\n,${customDelimiter}]+`;
    paramString = s.slice(4);
    delimiterExp = RegExp(delimiter);
  }

  const arr = paramString.split(delimiterExp);
  arr.forEach((element) => {
    let num = Number(element);
    if (Number.isNaN(num)) {
      invalidNums.push(element);
      num = 0;
    }
    if (num < 0) {
      negativeArr.push(num);
    } else if (num > 1000) {
      num = 0;
    }
    sum += num;
  });
  const isNegativeCountOdd = negativeArr.length % 2 === 1;
  const hasInvalidNumbers = invalidNums.length > 0;
  if (isNegativeCountOdd) {
    throw new Error(`negatives not allowed: ${negativeArr.join(",")}`);
  }
  if (hasInvalidNumbers) {
    throw new Error(`Invalid numbers passed: ${invalidNums.join(",")}`);
  }
  return sum;
};
module.exports = Add;
