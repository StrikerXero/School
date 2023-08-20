//it says to use npm init.
//install node packages
//IDK why unless its just to practice the commands
//So ill add a poop emoji somewhere? lol i wonder if i can use a module in a module...
const oopsie = require("./node_modules/emoji-poop");

//Average
exports.average = function () {
  var sum = 0;
  for (var i in arguments) {
    sum += arguments[i];
  }
  return sum / arguments.length;
  // return ((x + y + z) / ); //Ehh too easy, Find way to take in any
  //number of variables.
};
//smallest Math.min() but that might not be the point of this. And this is more fun.
exports.smallest = function () {
  var smallest = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < smallest) {
      smallest = arguments[i];
      //console.log("current smallest is " + smallest); // Debug track variable value.
    }
  }
  return smallest;
};

//isEven
exports.isEven = function () {
  var evenNumArray = [];
  for (var i in arguments) {
    if (arguments[i] > 0 && (arguments[i] % 2) == 0) {
        evenNumArray.push(arguments[i]);
    }
  }
  evenNumArray.push(oopsie); // To see if i could push this emoji into an array
  evenNumArray.push("<- Wondered if I could e.push the emoji")
  return evenNumArray;
};
