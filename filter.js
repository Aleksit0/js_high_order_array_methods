const nums = [23, 59, 12, 99, 55, 10, 47];

const highNum = nums.filter(function(num) { //? can take same params as forEach
  if (num >= 30) {
    console.log(`High numbers: ${num}`);
  }
});
