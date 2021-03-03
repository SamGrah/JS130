/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  string : word
  match() : array of strings : words

OUTPUTS ==>
  match() : array of words

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
  all letters (and counts) must be contained in words returned

IMPLICIT RULES ==>
  all words in array are returned
  return empty array if no matches
  is case sensitive
  lengths of words must be the same

MENTAL MODEL ==>
  create object with letter counts
  check if each letter count is met by word, if so add to output array

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
count letters
{ a: 2, b: 3, l: 1, etc}

    ALGORITHM
--------------------------------------
1. create output array
2. create object
3. for each letter in constructor passed word
  3.1 if letter isn't key, make it a key
  3.2. increment key
4. for each word in array
  4.1 if word is of different length than constructor passed word, continue
  4.1 iterate over all object properties
    4.1.1 if word contains letter with same count, push word to output array
*/

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(array) {
    let matchingArray = [];

    array.forEach(word => {
      if (word.toLowerCase().split('').sort().join('') ===
          this.word.split('').sort().join('')) {
        if (word.toLowerCase() !== this.word) matchingArray.push(word);
      }
    });

    return matchingArray;
  }
}

// let detector = new Anagram('allergy');
// let anagrams = detector.match(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

module.exports = Anagram;