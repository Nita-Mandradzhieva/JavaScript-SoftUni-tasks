function calculator(array) {
  let depozitSum = Number(array[0]);
  //   console.log(depozitSum);
  let months = Number(array[1]);
  //   console.log(months);
  let yearProcentage = Number(array[2]);
  //   console.log(yearProcentage);

  // Destructuring ..

  let totalSum =
    depozitSum + months * ((depozitSum * (yearProcentage / 100)) / 12);
  console.log(totalSum);
}

calculator(["200", "3", "5.7"]);
calculator(["2350", "6", "7"]);
