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
