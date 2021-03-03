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

class Scrabble {
  constructor(str) {
    this.charString = str;
  }

  static WORD_VALUES = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  }

  static removeZeroPointChars(word) {
    ['\t', '\n', ' '].forEach(char => {
      let regex = new RegExp(char);
      word = word.replace(regex, '');
    });
    return word;
  }

  static score(stringToScore) {
    if (!stringToScore) return 0;
    let scoringLetters = Scrabble.removeZeroPointChars(stringToScore);

    let totalScore = 0;
    scoringLetters.toLowerCase().split('').forEach(char => {
      for (let letterRng in Scrabble.WORD_VALUES) {
        if (letterRng.includes(char)) totalScore += Scrabble.WORD_VALUES[letterRng];
      }
    });
    return totalScore;
  }

  score() {
    return Scrabble.score(this.charString);
  }
}

module.exports = Scrabble;
