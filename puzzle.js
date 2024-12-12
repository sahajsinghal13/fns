const squareRoot = function (number) {
  return Math.sqrt(number);
}

const isOdd = function (number) {
    return number % 2 !== 0;
}

const half = function (number) {
  return number / 2;
}

const isLengthAbove = function (string) {
    return string.length > 5;
}

const capitalise = function (string) {
  return string.toUpperCase();
}

const filter = function (array, selectFrom) {
  const selectives = [];

  for (const element in array) {
    if (array[element] === true) {
      selectives.push(selectFrom[element]);
    }
  }

  return selectives;
}

const mapTo = function (fnName, array) {
  const result = [];

  for (const element in array) {
    result.push(fnName(array[element]));
  }

  if (fnName === isOdd || fnName === isLengthAbove) {
    return filter(result, array);
  }

  return result;
}
