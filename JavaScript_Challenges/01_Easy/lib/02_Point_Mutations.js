'use strict';
/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  two strings representing DNA strands:
    first string to DNA constructor
    second string

OUTPUTS ==>
  number, total number of differences between each string by position

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  - compute the total number of different characters, at equivalent positions,
    for each string

  - if the two strings are unequal, the comparison only comprehends the shorter
    of the two lengths

IMPLICIT RULES ==>
  - create an object for constructor passed string, where the string is
    a property

  - empty strings will return a result of zero

  - comparison doesn't mutate object stored string

  - object uses hammingDistance() function to compute difference


MENTAL MODEL ==>
  class DNA whose constructor takes a string and assigns it to a originalDNA
  property
  function prototype defines a hammingDistance() method which calculates the
  difference between its argument and the originalDNA string

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
hammingDistance()
1. choose the shorter of the two strings
2. define a totalDistance number as zero
3. iterate over the shorter of the two strings
  3.1 for each char that is different that same position of longer
      increment totalDistance
4. return total distance
*/

class DNA {
  constructor(strand) {
    this.DNA = strand;
  }

  hammingDistance(newDNA) {
    let shortDNA = newDNA.length > this.DNA.length ? this.DNA : newDNA;
    return shortDNA.split('').reduce((acc, _, idx) => {
      if (newDNA[idx] !== this.DNA[idx]) acc += 1;
      return acc;
    }, 0);
  }
}

module.exports = DNA;
