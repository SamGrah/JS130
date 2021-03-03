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

class Meetup {
  static DAY_TEXT_TO_NUM = {
    first : 1,
    second: 2,
    third:  3,
    fourth: 4,
    fifth:  5,
    teenth: [ 13, 14, 15, 16, 17, 18, 19 ],
    last: 'last'
  }

  static WEEKDAY_TO_NUM = {
    sunday:     0,
    monday:     1,
    tuesday:    2,
    wednesday:  3,
    thursday:   4,
    friday:     5,
    saturday:   6,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(weekday, reqOccurrance) {
    weekday = Meetup.WEEKDAY_TO_NUM[weekday.toLowerCase()];
    let occurrance = Meetup.DAY_TEXT_TO_NUM[reqOccurrance.toLowerCase()];
    let occurs = this._getWeekdayOccurances(weekday);
    return this._fetchDate(reqOccurrance, occurrance, occurs);
  }

  _fetchDate(reqOccurrance, occurrance, occurs) {
    let desiredDate;
    if (!occurs.length) {
      desiredDate = null;
    } else if (reqOccurrance === 'teenth') {
      desiredDate = occurs.find(dateVal => {
        return Meetup.DAY_TEXT_TO_NUM['teenth'].includes(dateVal.day);
      }).date;
    } else if (reqOccurrance === 'last') {
      desiredDate =  occurs[occurs.length - 1].date;
    } else {
      desiredDate = occurs.find(dateVal => dateVal.occurrance === occurrance);
      if (!desiredDate) {
        desiredDate = null;
      } else {
        desiredDate = desiredDate.date;
      }
    }
    return desiredDate;
  }

  _getWeekdayOccurances(weekday) {
    let day = 1;
    let date = new Date(this.year, this.month, day);

    let weekdayOccurrances = [];
    let occuranceNum = 1;
    while (date.getMonth() === this.month) {
      if (date.getDay() === weekday) {
        let occuranceInfo = {
          occurrance: occuranceNum,
          date: date,
          day: date.getDate(),
        };

        weekdayOccurrances.push(occuranceInfo);
        occuranceNum += 1;
      }

      day += 1;
      date = new Date(this.year, this.month, day);
    }

    return weekdayOccurrances;
  }
}

module.exports = Meetup;