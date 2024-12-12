const squareRoot = function (array) {
  const sqrts = [];

  for (const number of array) {
    sqrts.push(Math.sqrt(number));
  }

  return sqrts;
}

const selectOdds = function(array) {
  const odds = [];

  for (const number of array) {
    if (number & 1) {
      odds.push(number);
    }
  }

  return odds;
}

const divideBy2 = function (array) {
  const half = [];

  for (const number of array) {
    half.push(number / 2);
  }

  return half;
}
