const nums = [23, 59, 12, 99, 55, 10, 47];

const isEven = nums.sort(function(num) {
  if (num % 2 == 0) {
    console.log(`Even numbers are: ${num}`);
  }
});
console.log(isEven);

console.log('These are the sorted numbers.');

const sorted = nums.sort();
console.log(sorted);