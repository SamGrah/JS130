'use strict';
class PerfectNumber {

  static classify(number) {
    if (PerfectNumber.notValid(number)) throw `cannot compute ${number}`;

    let aliquotSum = PerfectNumber.sumOfDivisors(number);

    if (number === aliquotSum) return 'perfect';
    else if (number > aliquotSum) return 'deficient';
    return 'abundant';
  }

  static sumOfDivisors(number) {
    let divisors = [];
    for (let currentNum = number - 1; currentNum > 0; currentNum -= 1) {
      if (!(number % currentNum)) divisors.push(currentNum);
    }
    return divisors.reduce((acc, divisor) => acc + divisor, 0);
  }

  static notValid(number) {
    return (number < 1) || (typeof number !== 'number');
  }
}


module.exports = PerfectNumber;