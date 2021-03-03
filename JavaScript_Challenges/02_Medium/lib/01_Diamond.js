/* eslint-disable max-lines-per-function */
/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

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

*/

class Diamond {
  static makeDiamond(char) {
    let charDifference = char.charCodeAt(0) - 'A'.charCodeAt(0);
    let maxWidth = (2 * charDifference) + 1;

    let outputStr = '';
    let increment = 1;
    for (let position = 0; position >= 0; position += increment) {
      let currentChar = String.fromCharCode(('A'.charCodeAt(0) + position));
      let outerSpacing = (maxWidth / 2) - position;
      let innerSpacing = (2 * (position - 1)) + 1;

      outputStr += lineGenerator(outerSpacing, innerSpacing, currentChar);

      if (position === charDifference) increment = -1;
    }

    return outputStr;

    function lineGenerator(outerSpace, innerSpace, char) {
      if (char === 'A') {
        return ' '.repeat(outerSpace) + 'A' + ' '.repeat(outerSpace) + '\n';
      }

      return  ' '.repeat(outerSpace) + char + ' '.repeat(innerSpace) +
              char + ' '.repeat(outerSpace) + '\n';
    }
  }
}

module.exports = Diamond;