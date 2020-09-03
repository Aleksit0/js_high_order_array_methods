const nums = [23, 59, 12, 99, 55, 10, 47];

const sum = nums.reduce(function(total, num) {
  return total + num;
}, 0);

console.log(sum);