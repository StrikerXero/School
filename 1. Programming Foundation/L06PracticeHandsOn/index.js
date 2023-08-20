var calculate = require("./moreMath");

var x = 50,
  y = 25,
  z = 30;

//Just fyi the starter code has the console.log written as 20 not 25 like the variable is assigned above.
console.log("The average of 50, 20, and 30 is " + calculate.average(x, y, z));

console.log(
  "The smallest number of 50, 20, and 30 is " + calculate.smallest(x, y, z)
);

console.log("The following numbers are even: " + calculate.isEven(x, y, z));
console.log(`Not my typo :) should be ${y} as y = 25`);
