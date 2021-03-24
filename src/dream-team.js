const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if(!Array.isArray(members)) return false;
 else{
   let sorted=[], company=[];
    for (i=0; i< members.length; i++){
      if (typeof(members[i])==="string"){
        sorted.push(members[i].trim().toUpperCase())
      }
    }
    sorted.forEach(element => company.push(element[0]));
    return company.sort().join('');
}
};
