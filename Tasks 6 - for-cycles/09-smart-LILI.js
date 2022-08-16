function lili(age, pricePeralnq, priceFor1Toy) {
  let money = 0;
  let countOfToys = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += 10;
      console.log(money);
    } else {
      countOfToys++;
      console.log(countOfToys);
    }
  }
}

lili(["10", "170.00", "6"]);
