const add = function(...args) {
	return args.reduce((previousSum, currentValue) => previousSum + currentValue, 0);
};

const subtract = function(...args) {
	return args.reduce((previousResult, currentValue) => previousResult - currentValue);
};

const sum = function(array) {
	return array.reduce((previousSum, currentValue) => previousSum + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((previousMultiple, currentValue) => previousMultiple * currentValue);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = num;
	for (let i = num - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
