function school(array) {
  let numberOfPens = Number(array[0]);
  let numberOfMarkers = Number(array[1]);
  let liters = Number(array[2]);
  let procentage = Number(array[3]);

  let priceForPens = numberOfPens * 5.8;
  //   console.log(priceForPens);
  let priceForMarkers = numberOfMarkers * 7.2;
  //   console.log(priceForMarkers);
  let priceForLiters = liters * 1.2;
  //   console.log(priceForLiters);
  let priceForAllMaterials = priceForPens + priceForMarkers + priceForLiters;
  //   console.log(priceForAllMaterials);
  let procentageDevision = procentage / 100;
  //   console.log(procentageDevision);
  let priceWithSale =
    priceForAllMaterials - priceForAllMaterials * procentageDevision;
  //   console.log(priceWithSale);

  console.log(priceWithSale);
}

school(["2", "3", "4", "25"]);
school(["4", "2", "5", "13"]);
