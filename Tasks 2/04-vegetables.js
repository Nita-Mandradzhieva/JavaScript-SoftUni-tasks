function vegetables(
  PriceKgVegetables,
  priceKgFruits,
  allKgVegetables,
  allKgfruits
) {
  let costOfVegetables = PriceKgVegetables * allKgVegetables;
  let costOfFruits = priceKgFruits * allKgfruits;

  let commonPrice = costOfVegetables + costOfFruits;
  let commonPriceInEuros = (commonPrice / 1.94).toFixed(2);

  console.log(commonPriceInEuros);
}

vegetables(0.194, 19.4, 10, 10);
vegetables(1.5, 2.5, 10, 10);
