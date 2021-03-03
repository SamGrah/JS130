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

class Robot {
  constructor() {
    this.id = Robot.generateID();
    Robot.robots.push(this.id);
  }

  static generateID() {
    const letters = 'ABCDEFHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let id;
    do {
      id =  selectRandom(letters) + selectRandom(letters) +
            selectRandom(numbers) + selectRandom(numbers) +
            selectRandom(numbers);
    } while (Robot.robots.includes(id));

    return id;

    function selectRandom(string) {
      let index = Math.floor(Math.random() * (string.length - 1));
      return string[index];
    }
  }

  static robots = [];

  name() {
    return this.id;
  }

  reset() {
    this.id = Robot.generateID();
    Robot.robots.push(this.id);
  }
}


module.exports = Robot;