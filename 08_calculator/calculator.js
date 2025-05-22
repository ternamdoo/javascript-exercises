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

const factorial = function() {
	
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
