/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chain = this.makeChains();
  }



  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {};
    for (let i = 0; i < this.words.length - 1; i++) {
      const currentWord = this.words[i];
      const nextWord = this.words[i + 1];

      // console.log(currentWord)
      if (chain[currentWord]) {
        chain[currentWord].push(nextWord);
      }
      else {
        chain[currentWord] = [nextWord]
      }
    }
    return chain;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let text = '';
    let currentWord = '';

    const startingWords = Object.keys(this.chain);
    currentWord = startingWords[Math.floor(Math.random() * startingWords.length)];
    // console.log('Starting word:', currentWord);

    for (let i = 0; i < numWords; i++) {
      text += currentWord + ' ';

      const nextWordOption = this.chain[currentWord]

      if (nextWordOption) {
        const nextWord = nextWordOption[Math.floor(Math.random() * nextWordOption.length)];
        // console.log('Next word:', nextWord);

        currentWord = nextWord;
      } else {
        // console.log('no next word available:', currentWord);
        break;
      }
    }
    console.log('Generated text:', text);
    return text.trim();
  }
}

const machine = new MarkovMachine("HERE IS YOUR WORD SOUP:")
const generatedText = machine.makeText();
console.log(generatedText);
machine.makeChains()

module.exports = { MarkovMachine };

//cmd+shift+p