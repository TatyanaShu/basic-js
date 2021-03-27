const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter=0;
    arr.forEach(element => {
        if(Array.isArray(element)){
          let counterNew=this.calculateDepth(element)
          if (counterNew>counter) {counter=counterNew}
        }
    });
    return ++counter;
  };
};