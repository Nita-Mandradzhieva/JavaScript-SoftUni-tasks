function basketball(array) {
  // let basketballKetsove = Number(array[0])
  // let basketballEkip = Number(array[0]);
  // let basketballBall = Number(array[0]);
  // let basketballAksesoari = Number(array[0]);

  let priceForTrainings = Number(array[0]);
  let priceForKetsove = priceForTrainings - priceForTrainings * (40 / 100);
  //   console.log(priceForKetsove);

  let priceForEkip = priceForKetsove - priceForKetsove * (20 / 100);
  //   console.log(priceForEkip);

  let oneOfFour = 1 / 4;
  //   console.log(oneOfFour);
  let priceForBall = priceForEkip * oneOfFour;
  //   console.log(priceForBall);

  let priceForAksesoari = priceForBall * (1 / 5);
  //   console.log(priceForAksesoari);

  let totalPrice =
    priceForTrainings +
    priceForKetsove +
    priceForEkip +
    priceForBall +
    priceForAksesoari;

  console.log(totalPrice);
}

basketball(["365"]);
basketball(["550"]);
