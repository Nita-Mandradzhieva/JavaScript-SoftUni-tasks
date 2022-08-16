function streamFromSymbols(array) {
  let word = array[0];

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    console.log(letter);
  }
}

streamFromSymbols(["softuni"]);
streamFromSymbols(["ice cream"]);
