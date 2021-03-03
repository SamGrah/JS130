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