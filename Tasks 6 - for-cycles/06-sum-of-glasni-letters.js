function glasniLetters(array) {
  let text = array[0];
  let sum = 0;
  let letter = "";

  for (let i = 0; i < text.length; i++) {
    letter = text[i];
    // console.log(letter);

    if (letter === "a") {
      sum += 1;
    } else if (letter === "e") {
      sum += 2;
    } else if (letter === "i") {
      sum += 3;
    } else if (letter === "o") {
      sum += 4;
    } else if (letter === "u") {
      sum += 5;
    }
  }
  console.log(sum);
}
glasniLetters(["hello"]);
glasniLetters(["hi"]);
glasniLetters(["bamboo"]);
glasniLetters(["beer"]);
