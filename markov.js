/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};

    for (let i = 0; i< this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (Object.keys(chains).indexOf(word) === -1) {
        chains[word] = [...nextWord];
      } else {
        chains[word].push(nextWord);
      }
    }
    this.chains = chains;
  }


  /** return random text from chains */
  static random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  } 

  makeText(numWords = 100) {
    let text = [];
    let keys = [...this.chains.keys()];
    let key = MarkovMachine.choice(keys);

    while (text < numWords && key !== null) {
      text.push(key)
      key = MarkovMachine.choice(this.chains[key])
    }
    return text.join(" ");
  }
}

module.exports = {
  MarkovMachine,
}
