class CustomSet {
  constructor(items) {
    this.items = items || [];
  }

  isEmpty() { return !this.items.length; }

  contains(value) { return this.items.includes(value); }

  isSubset(comparisonSet) {
    return this.items.every(value => comparisonSet.contains(value));
  }

  isDisjoint(comparisonSet) {
    return this.items.every(value => !comparisonSet.contains(value));
  }

  isSame(comparisonSet) {
    return this.isSubset(comparisonSet) && comparisonSet.isSubset(this);
  }

  add(value) {
    if (!this.contains(value)) this.items.push(value);
    return this;
  }

  intersection(comparisonSet) {
    let commonItems = this.items.filter(value => comparisonSet.contains(value));
    return new CustomSet(commonItems);
  }

  difference(comparisonSet) {
    let uniques = this.items.filter(value => !comparisonSet.contains(value));
    return new CustomSet(uniques);
  }

  union(additionalSet) {
    return new CustomSet(this.items.concat(additionalSet.items));
  }
}

module.exports = CustomSet;