// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//"hello world".toAlternatingCase() === "HELLO WORLD"

String.prototype.toAlternatingCase = function () {

    let lowReg = /[a-z]/g;
    let upReg = /[A-Z]/g;
    let result = '';

    for (let i = 0; i < this.length; i++){
        // console.log(result[i].search(lowReg));
        if (this[i].search(lowReg) !== -1){
            result += '' + this[i].toUpperCase()
        } else if (this[i].search(upReg) !== -1) {
            result += '' + this[i].toLowerCase()
        } else if ( this[i] === ' '){
            result += ' '
        } else {
            result += '' + this[i]
        }
    }
    return result

};