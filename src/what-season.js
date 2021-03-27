const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {return 'Unable to determine the time of year!';}
  else if (!(new Date(date))||isNaN(date)) {throw "new Error"}
  let month=date.getMonth();
  switch(month<12){
      case (month<=1&&month>=0||month===11): return "winter";
      case (month<=4&&month>1): return "spring";
      case (month<=7&&month>4): return "summer";
      case (month<=10&&month>7): return "autumn (fall)";
  }
     
};
