const {MarkovMachine} = require("./markov.js")

test('Starting word of generated text is present in input text', () => {
    const inputText = "the cat in the hat";
    const machine = new MarkovMachine(inputText);
    const generatedText = machine.makeText(50); // Generate text with 50 words
    const generatedWords = generatedText.split(' ');
    const startingWord = generatedWords[0];
    expect(inputText.split(' ')).toContain(startingWord);
  });
  
test('Each word in generated text is followed by a valid next word', () => {
    const inputText = "the cat in the hat";
    const machine = new MarkovMachine(inputText);
    const generatedText = machine.makeText(50); // Generate text with 50 words
    const generatedWords = generatedText.split(' ');
    let isValidSequence = true;
    for (let i = 0; i < generatedWords.length - 1; i++) {
      const currentWord = generatedWords[i];
      const nextWord = generatedWords[i + 1];
      if (!machine.chain[currentWord].includes(nextWord)) {
        isValidSequence = false;
        break;
      }
    }
    expect(isValidSequence).toBe(true);
  });
  