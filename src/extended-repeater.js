const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (typeof(options.repeatTimes)== 'undefined'){repeatTimes=1} else { repeatTimes=options.repeatTimes};
  if (typeof(options.separator)== 'undefined'){separator= "+" } else{separator=options.separator};
  if (typeof(options.additionRepeatTimes)== 'undefined'){additionRepeatTimes=1 }else {additionRepeatTimes=options.additionRepeatTimes };
  if (typeof(options.additionSeparator) == 'undefined'){additionSeparator="|"}else {additionSeparator=options.additionSeparator};
 if (options.addition===null){
  options.addition='null'
 }
let str1=[];
let addition1=[];
let result=[]
for (i=0;i<additionRepeatTimes; i++){
  addition1.push(options.addition)
}
let add=addition1.join(additionSeparator);
str1=String(str)+add;
for (i=0;i<repeatTimes; i++){
  result.push(str1);
}
return result.join(separator)

};

