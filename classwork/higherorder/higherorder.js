var allNumbers = [2, 12, 3, 17, 233, 21];

// add the numbers to the running total
var total = function(runningTotal, currentNumber) {
 return runningTotal + currentNumber;
};

// remove numbers less than 10
var removeLessThanTen = function(number) {
  return number > 10;
};

console.log('Filter: ', allNumbers.filter(removeLessThanTen));
console.log(allNumbers.filter(removeLessThanTen).reduce(total, 0));
