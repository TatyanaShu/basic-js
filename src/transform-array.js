const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  } else {
    let arrNew = arr.slice();
    //   arrNew.flat();
    if (arrNew[0] == "--discard-prev" || arrNew[0] == "--double-prev") {
      arrNew.shift();
    }
    if (
      arrNew[arrNew.length - 1] == "--discard-next" ||
      arrNew[arrNew.length - 1] == "--double-next"
    ) {
      arrNew.pop();
    }
    for (let i = 0; i < arrNew.length; i++) {
      if (arrNew[i] == "--discard-prev") {
        arrNew.splice(i - 1, 2);
      }
      if (arrNew[i] == "--discard-next") {
        if (
          arrNew[i + 2] == "--discard-prev" ||
          arrNew[i + 2] == "--double-prev" 
        ) {
          arrNew.splice(i, 3);
        } else {
          arrNew.splice(i, 2);
        }
      }
      if (arrNew[i] == "--double-prev") {
        arrNew[i] = arrNew[i - 1];
      }
      if (arrNew[i] == "--double-next") {
        arrNew[i] = arrNew[i + 1];
      }
    //   if (arrNew[i] == undefined) {
    //     arrNew.splice(i, 1);
    //   }
    }
    return arrNew;
  }
};
