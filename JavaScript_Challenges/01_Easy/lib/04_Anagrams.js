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

module.exports = Anagram;