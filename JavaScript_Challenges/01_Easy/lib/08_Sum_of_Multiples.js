/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> list of numbers
            first number is limit
            second and third numbers are 'bases'

OUTPUTS ==>
  number : sum of multiples

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  add all multiples of given base numbers, less than the limit number
  if no base number is provided, default base numbers are 3 and 5

IMPLICIT RULES ==>
  the list of multiples should not contain duplicates
  arguments passed to SumOfMultiples constructor
  two methods, both named 'to()' one static one instance

MENTAL MODEL ==>


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
1. to() method accepts limit and list of numbers arguments
2. if list of arguments is empty, set arguments array with elements 3 & 5
3. create list of multiples
4. iterate over the list of arguments; for each
  4.1 iterate up all multiples of the argument value, up to limit; for each
    4.1.1 if the multiple isn't in list of multiples, push to multiples array
5. return sum of multiples array elements

instance method calls static method
*/

class SumOfMultiples {
  constructor(...args) {
    this.args = args;
  }

  to(limit) {
    return SumOfMultiples.to(limit, ...this.args);
  }

  static to(limit, ...args) {
    args = args.length ? args : [3, 5];

    let multiples = [];
    args.forEach(number => {
      for (let value = number; value < limit; value += number) {
        if (!multiples.includes(value)) multiples.push(value);
      }
    });
    return multiples.reduce((acc, multiple) => acc + multiple, 0);
  }

}


module.exports = SumOfMultiples;