'use strict';
/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  number

OUTPUTS ==>
  string
  error

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  'decifient' numbers for which the sum of divisors is less than the number
  'abundant' numbers have a sum of divisors larger than the number
  'perfect' numbers are equal to sum of divisors

IMPLICIT RULES ==>
  create PerfectNumber constructor, method classify returns classification
  throw error if number is less than zero

MENTAL MODEL ==>
  store number as property of instance
  classify method contains comparision of sum of divisors
  helper method determines and sums divisors

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
  store divisors in array


    ALGORITHM
--------------------------------------

*/

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