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

const testArray = [1, 2, 4, 9, 15, 16];

console.log('Square Roots:', squareRoot(testArray));
console.log('Odds:', selectOdds(testArray));