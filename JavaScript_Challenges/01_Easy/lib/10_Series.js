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

class Series {
  constructor(series) {
    this.series = series;
  }

  slices(num) {
    if (num > this.series.length) throw Error('Series shorter than slice length');
    if (typeof num !== 'number') throw Error('slice value should be a number');

    let seriesArr = this.series.split('').map(str => Number(str));
    let slices = [];
    let index = 0;
    while (index + num !== seriesArr.length + 1) {
      slices.push(seriesArr.slice(index, index + num));
      index += 1;
    }

    return slices;
  }
}

module.exports = Series;
