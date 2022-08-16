function convertor(degreesInC) {
  let formula = degreesInC * (9 / 5) + 32;
  let round = formula.toFixed(2);
  console.log(round);
}

convertor(25);
convertor(0);
convertor(-5.5);
convertor(32.3);
