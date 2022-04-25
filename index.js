const Add = (s) => {
  if (s == "") return 0;

  let delimiter = /[\n,]+/;
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
