const squareRoot = function (number) {
  return Math.sqrt(number);
}

const selectOdds = function (number) {
  if (number & 1) {
    return number;
  }
}

const half = function (number) {
  return number / 2;
}

const lengthAbove = function (string) {
  if (string.length > 5) {
    return string;
  }
}

const capitalise = function (string) {
  return string.toUpperCase();
}

const selectFromArray = function (array) {
  const selectives = [];

  for (const element in array) {
    if (array[element] !== undefined) {
      selectives.push(array[element]);
    }
  }

  return selectives;
}

const fnCall = function (fnName, array) {
  const result = [];

  for (const element in array) {
    result.push(fnName(array[element]));
  }

  if (fnName === selectOdds || fnName === lengthAbove) {
    return selectFromArray(result);
  }

  return result;
}

const test = function () {
  console.log(fnCall(squareRoot, [1, 2, 4, 9]));
  console.log(fnCall(selectOdds, [1, 2, 4, 9]));
  console.log(fnCall(half, [1, 2, 4, 9]));
  console.log(fnCall(lengthAbove, ['a', 'aaaaa', 'aaaaaa', 'aaaaaaa']));
  console.log(fnCall(capitalise, ['a', 'aaaaa', 'aaaaaa', 'aaaaaaa']));
}

test();
