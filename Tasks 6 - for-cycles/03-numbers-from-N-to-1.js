function numbersFromNtoOne(array) {
  let number = Number(array[0]);

  for (let i = number; i > 0; i--) {
    console.log(i);
  }
}
numbersFromNtoOne(["2"]);
numbersFromNtoOne(["3"]);
numbersFromNtoOne(["5"]);
