/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  string as octal number

OUTPUTS ==>
  number

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  convert octal input to decimal number output
  invalid inputs are treated as octal zero

IMPLICIT RULES ==>
  'Octal' constructor takes octal string argument
  'toDecimal()' method converts octal string to decimal number

MENTAL MODEL ==>
  guard clause for invalid inputs (NaN) returns zero
  split the string into array
  reverse the array
  map each element by 8^index * element value

    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------

*/

class Octal {
  constructor(octalStr) {
    this.octalStr = octalStr;
  }

  toDecimal() {
    if (this.isInvalid()) return 0;

    let octalDigits = this.octalStr.split('').reverse();
    return octalDigits.reduce((acc, octalDigit, position) => {
      acc += Number(octalDigit) * (8 ** position);
      return acc;
    }, 0);
  }

  isInvalid() {
    if (Number.isNaN(Number(this.octalStr))) return true;

    let digitsRangeInvalid = this.octalStr.split('').some(digit => {
      return Number(digit) >= 8;
    });
    if (digitsRangeInvalid) return true;
  } 
}

module.exports = Octal;