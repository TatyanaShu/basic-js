const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 let steps=Math.pow(2, disksNumber)-1
  let time = (steps/turnsSpeed)*3600;
 
 let answer={
   turns: steps,
   seconds: Math.floor(time)
 }
 return answer
};
