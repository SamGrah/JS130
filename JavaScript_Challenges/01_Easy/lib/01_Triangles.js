'use strict';
/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  3 integers, each side of triangle

OUTPUTS ==>
  text of either:
    'equilateral', 'isosceles', 'scalene'

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  - 'equilateral' = sides equal
  - 'isosceles' = two sides eqal
  - 'scalene' = all sides different lengths
  - sum of any two sides must be greater than remaining side
  - no side can be of negative value

IMPLICIT RULES ==>
  - create constructor to return object with property of
    triangle type
  - object accesses kind() method to return triangle type
  - throw error if sides specified don't represent a triangle


MENTAL MODEL ==>
  define class Triangle whose constructor accepts three arguments

  constructor contains functions to validate sides and
  determine triangleType property

  constructor throws error if sides don't validate as triangle

  function prototype contains kind() method to return triangleType
  property

    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>
  class:
    properties: triangleType (string)
    function prototype: kind()

RULESET ==>


    ALGORITHM
--------------------------------------
class Triangle constructor -
  1. order sides in array
  2. check if isTriangle() is false, if so throw error
  2. if first & thrid elements equal, set triangleType property to 'equilateral'
  3. if first & second elements equal, set triangleType property to  'isoceles'
  4. set triangleType property to 'scalene'

isTriangle function
  1. if all sides are number type or greater than zero, return false
  2. if size of input array isn't equal to 3, return false
  3. 3 combinations of sides to ensure no two are smaller than third, if any
     return false
  4. return true
*/

class Triangle {
  constructor(...sides) {
    if (!isTriangle(sides)) throw console.log("sides not a triangle");
    sides.sort();
    if (sides[0] === sides[2]) {
      this.triangleType = 'equilateral';
    } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
      this.triangleType = 'isosceles';
    } else {
      this.triangleType = 'scalene';
    }

    function isTriangle(sides) {
      if (sides.some(side => typeof side !== 'number' || side <= 0) ||
          sides.length !== 3) return false;
      if ((sides[0] + sides[1] <= sides[2]) ||
          (sides[0] + sides[2] <= sides[1]) ||
          (sides[1] + sides[2] <= sides[0])) return false;
      return true;
    }
  }

  kind() {
    return this.triangleType;
  }
}

module.exports = Triangle;
