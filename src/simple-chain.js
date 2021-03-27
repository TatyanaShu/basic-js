const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
    if (typeof(position)!="number"|| (position<=0)|| position> this.chain.length) {
      this.chain=[];
      throw  Error;
    } 
      this.chain.splice(position-1, 1);
      return this;
       
  },
  reverseChain() {
     this.chain.reverse();
     return this;
  },
  finishChain() {
    let finalString= this.chain.join("~~");
    this.chain = [];
    return finalString;
     
  }

};

module.exports = chainMaker;
