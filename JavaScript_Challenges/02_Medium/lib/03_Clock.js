class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static MINS_PER_HOUR = 60;
  static MINS_PER_DAY = 24 * 60;

  static at(hours, min) {
    if (!min) min = 0;
    let totalMins = Clock.totalMinutes(hours, min);
    let [ newHours, newMins ] = Clock.totalMinsToHourMin(totalMins);
    return new Clock(newHours, newMins);
  }

  static totalMinutes(hours, mins) {
    let totalMins = (hours * Clock.MINS_PER_HOUR) + mins;
    totalMins %= (Clock.MINS_PER_DAY);
    if (totalMins < 0) totalMins = (Clock.MINS_PER_DAY) + totalMins;
    return totalMins;
  }

  static totalMinsToHourMin(totalMins) {
    let mins = totalMins % Clock.MINS_PER_HOUR;
    let hours = (totalMins - mins) / Clock.MINS_PER_HOUR;
    return [hours, mins];
  }

  toString() {
    let hoursStr = `${this.hours < 10 ? '0' : '' }${this.hours}`;
    let minsStr = `${this.minutes < 10 ? '0' : '' }${this.minutes}`;
    return hoursStr + ':' + minsStr;
  }

  add(mins) {
    let totalMinutes = Clock.totalMinutes(this.hours, this.minutes + mins);
    let [newHours, newMins] = Clock.totalMinsToHourMin(totalMinutes);
    this.hours = newHours;
    this.minutes = newMins;
    return this;
  }

  subtract(mins) {
    return this.add(-1 * mins);
  }

  isEqual(timeStr) {
    return this.toString() === timeStr.toString();
  }
}

module.exports = Clock;

