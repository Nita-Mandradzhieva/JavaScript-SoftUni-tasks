function numbersToN(array) {
  let number = Number(array[0]);

  for (let i = 1; i <= number; i += 3) {
    console.log(i);
  }
}

numbersToN(["10"]);
numbersToN(["7"]);
numbersToN(["15"]);
