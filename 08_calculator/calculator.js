const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, each) => {return total + each}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, each) => {return total * each});
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  else return a * factorial(a-1);
	// return a;
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
