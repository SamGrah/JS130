'use strict';
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
