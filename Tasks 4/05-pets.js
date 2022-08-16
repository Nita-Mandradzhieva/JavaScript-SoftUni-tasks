function pets(
  numberOfDays,
  leftFoodInKilos,
  foodDogPerDayInKilos,
  foodCatPerDayInKilos,
  foodTortugaPerDayInKilos
) {
  let neededFoodDog = numberOfDays * foodDogPerDayInKilos;
  //   console.log(neededFoodDog);

  let neededFoodCat = numberOfDays * foodCatPerDayInKilos;
  //   console.log(neededFoodCat);

  let neededFoodTortuga = numberOfDays * foodTortugaPerDayInKilos;
  //   console.log(neededFoodTortuga);

  let allFood = neededFoodDog + neededFoodCat + neededFoodTortuga;
  //   console.log(allFood);

  let left = 0;

  if (allFood < leftFoodInKilos) {
    left = leftFoodInKilos - allFood;
    leftInKg = left / 1000;
    console.log(`${leftInKg} kilos of food left.`);
  } else if (allFood > leftFoodInKilos) {
    left = allFood - leftFoodInKilos;
    leftInKg = left / 1000;
    console.log(`${leftInKg} more kilos of food are needed.`);
  }
}

pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 321);
