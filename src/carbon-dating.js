const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof(sampleActivity)!=="string")return false;
  let sample=parseFloat(sampleActivity);
  if (isNaN(sample)||sample<=0 ||sample>MODERN_ACTIVITY){return false;}
  else {
        let x=Math.log(MODERN_ACTIVITY/sample);
    let k=Math.LN2/HALF_LIFE_PERIOD;
    let t =x/k;
    return Math.ceil(t)
  }
};
