function countPositivesSumNegatives(input) {
  //Start coding here
  result = [];
  if (input.length === 0) {
    return result;
  } else {
    positive = input.filter((num) => num >= 0).length;
    negative = input
      .filter((num) => num < 0)
      .reduce((arr, cur) => arr + cur, 0);
    result = [positive, negative];
    return result;
  }
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
