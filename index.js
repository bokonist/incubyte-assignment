const Add = (s) => {
  if (s === "") {
    return 0;
  }

  let delimiter = "";
  let paramString = s;
  let delimiterExp = /[\n,]+/;
  let customDelimiter;
  if (/^[/]{2}.\n/.test(s)) {
    customDelimiter = s.charAt(2);
    delimiter = `[\\n,${customDelimiter}]+`;
    paramString = s.slice(4);
    delimiterExp = RegExp(delimiter);
  }

  const arr = paramString.split(delimiterExp);

  const negativeArr = [];
  arr.forEach((element, index) => {
    let num = Number(element);
    if (Number.isNaN(num)) {
      throw new Error(
        `Invalid numbers passed: ${arr
          .filter((el) => Number.isNaN(Number(el)))
          .join(",")}`
      );
    }
    if (num < 0) {
      negativeArr.push(num);
    } else if (num > 1000) {
      num = 0;
    }
    arr[index] = num;
  });
  const isNegativeCountOdd = negativeArr.length % 2 === 1;
  if (isNegativeCountOdd) {
    throw new Error(`negatives not allowed: ${negativeArr.join(",")}`);
  }
  const sum = arr.reduce((el, tempSum) => tempSum + el, 0);
  return sum;
};
module.exports = Add;
