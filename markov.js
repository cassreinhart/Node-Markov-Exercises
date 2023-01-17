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
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let text = '';
    for (let i = 1; i <= numWords; i++) {
      
      if (text.length > 0) {
        let randomWordIdx = Math.floor(Math.random() * chains.length + 1)
        text+= Object.keys(chains)[randomWordIdx];
      } else {
        let randomChainIdx = Math.floor(Math.random() * chains[i].length + 1) //this won't work
        text+= chains[Object.keys(chains)]
      }
    }
    return text;
  }
}


