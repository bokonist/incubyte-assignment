const Add = (s) => {
  if (s == "") return 0;

  let delimiter;
  if (/^[\/]{2}.\n/.test(s)) {
    delimiter = "[\\n," + s[2] + "]+";
    s = s.slice(4);
    delimiter = RegExp(delimiter);
    //return delimiter;
  } else {
    delimiter = /[\n,]+/;
  }
  let arr = s.split(delimiter);
  let sum = arr
    .map((el) => {
      if (el == "") return 0;
      else if (isNaN(el))
        throw new Error(
          "Invalid numbers passed: " + arr.filter((el) => isNaN(el)).join(",")
        );
      else if (el[0] == "-")
        throw new Error(
          "negatives not allowed: " +
            arr.filter((el) => Number(el) < 0).join(",")
        );
      else return Number(el);
    })
    .reduce((el, acc) => {
      acc += el;
      return acc;
    }, 0);
  return sum;
};

module.exports = Add;
