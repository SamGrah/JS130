class SumOfMultiples {
  constructor(...args) {
    this.args = args;
  }

  to(limit) {
    return SumOfMultiples.to(limit, ...this.args);
  }

  static to(limit, ...args) {
    args = args.length ? args : [3, 5];

    let multiples = [];
    args.forEach(number => {
      for (let value = number; value < limit; value += number) {
        if (!multiples.includes(value)) multiples.push(value);
      }
    });
    return multiples.reduce((acc, multiple) => acc + multiple, 0);
  }

}


module.exports = SumOfMultiples;