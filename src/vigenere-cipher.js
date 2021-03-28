class VigenereCipheringMachine {
    
  constructor(direct = true) {
      this.direct = direct;
  }

  encrypt(str, key) {
    
      if (!str || !key) {
          throw new Error();
      }

      let massStr = str.toUpperCase().split('');
      let massKey = key.toUpperCase().split('');

      let result = massStr.map(element => {
          let itog = element;
          let code = element.charCodeAt();
          
          if (code >= 65 && code <= 90) {
            itog = String.fromCharCode(((code + massKey[0].charCodeAt()) % 26) + 65);
              massKey.push(massKey.shift());
          }
          return itog;
      });

      if (!this.direct) {
          result.reverse();     
      } 

      return result.join('');
  }

  decrypt(str, key) {

      if (!str || !key) {
          throw new Error();
      }

      let massStr = str.toUpperCase().split('');
      let massKey = key.toUpperCase().split('');

      let result = massStr.map(el => {
          let itog = el;
          let code = el.charCodeAt();
          if (code >= 65 && code <= 90) {
            itog = String.fromCharCode(((code - (massKey[0].charCodeAt()) + 26) % 26) + 65);
              massKey.push(massKey.shift());
          }
          return itog;
      });

      if (!this.direct) {
          result.reverse();     
      } 

      return result.join('');
  }
}

module.exports = VigenereCipheringMachine;