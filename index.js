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
  let sum = s
    .split(delimiter)
    .map((el) => {
      if (el == "") return 0;
      else return Number(el);
    })
    .reduce((el, acc) => {
      acc += el;
      return acc;
    }, 0);
  return sum;
};

module.exports = Add;
