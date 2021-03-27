const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)==false) throw Error;
  let arrNew=[];
  for (let i=0; i<arr.length; i++){
    if (arr[i]=="--double-next") {
        if(arr[i+1]!=undefined){
            arrNew.push(arr[i+1]);
        }
        
  } else if (arr[i]=="--double-prev"){
   if(arr[i-1]!=undefined&&arr[i-2]!="--discard-next") {
    arrNew.push(arr[i-1]);
   }
  } else if (arr[i]=="--discard-prev"){
    if (arr[i-2]!="--discard-next"){
        arrNew.pop();
    }
  } else if (arr[i]=="--discard-next"){
        i++;
  }  else  if (!["--discard-next","--discard-prev","--double-next","--double-prev"].includes(arr[i])){
    arrNew.push(arr[i]);
    }
  }
  return arrNew;
};