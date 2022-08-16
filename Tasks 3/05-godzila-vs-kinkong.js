function vs(array) {
  let budgetForFilm = Number(array[0]);
  let counfOfStatists = Number(array[1]);
  let priceOfClothes = Number(array[2]);

  let sumDekor = budgetForFilm * (10 / 100);
  //   console.log(`sumDekor: ${sumDekor.toFixed(3)}`);

  let sumObleklo = counfOfStatists * priceOfClothes;
  //   console.log(`sumObleklo: ${sumObleklo.toFixed(2)}`);

  if (counfOfStatists > 150) {
    sumObleklo = sumObleklo - sumObleklo * (10 / 100);
  }
  //   console.log(`sumObleklo: ${sumObleklo.toFixed(3)}`);

  let finalMoviePrice = sumDekor + sumObleklo;
  //   console.log(`finalMoviePrice: ${finalMoviePrice.toFixed(3)}`);

  let left = 0;

  if (finalMoviePrice < budgetForFilm) {
    left = budgetForFilm - finalMoviePrice;
    console.log(
      `Action! Wingard starts filming with ${left.toFixed(2)} leva left`
    );
  } else if (finalMoviePrice > budgetForFilm) {
    left = finalMoviePrice - budgetForFilm;
    console.log(
      `Not enough money! Wingard needs ${left.toFixed(2)} leva more.`
    );
  }
}

vs(["20000", "120", "55.5"]);
vs(["15437.62", "186", "57.99"]);
vs(["9587.88", "222", "55.68"]);
