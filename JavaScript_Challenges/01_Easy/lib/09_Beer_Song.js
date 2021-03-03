/* eslint-disable max-lines-per-function */
class BeerSong {

  static verse(bottle) {
    let verse;
    if (bottle === 0) {
      verse =   "No more bottles of beer on the wall, no more " +
                "bottles of beer.\nGo to the store and buy some " +
                "more, 99 bottles of beer on the wall.\n";
    } else {
      verse =   `${bottlesStr(bottle)} of beer on the wall, ` +
                `${bottlesStr(bottle)} of beer.\n` +
                `Take ${bottle === 1 ? 'it' : 'one'} down and pass it around, ` +
                `${bottlesStr(bottle - 1)} of beer on the wall.\n`;
    }

    return verse;

    function bottlesStr(bottle) {
      if (bottle === 0) {
        return 'no more bottles';
      } else if (bottle === 1) {
        return '1 bottle';
      } else {
        return `${bottle} bottles`;
      }
    }
  }

  static verses(...bottles) {
    bottles.sort((a, b) => b - a);

    let verses = [];
    for (let bottle = bottles[0]; bottle >= bottles[1]; bottle -= 1 ) {
      verses.push(BeerSong.verse(bottle));
    }
    return verses.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;