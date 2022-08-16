function painting(array) {
  let nailon = Number(array[0]);
  let paint = Number(array[1]);
  let razreditel = Number(array[2]);
  let hours = Number(array[3]);

  let sumForNailon = (nailon + 2) * 1.5;
  console.log(sumForNailon);

  let precentageOne = 10 / 100;
  let sumForPaint = (paint + precentageOne) * 14.5;
  console.log(sumForPaint);

  let sumForRazreditel = razreditel * 5.0;
  console.log(sumForRazreditel);

  let sumForTorbichki = 0.4;
  let totalSumForMaterials =
    sumForNailon + sumForPaint + sumForRazreditel + sumForTorbichki;
  console.log(totalSumForMaterials);

  let sumForMaistor = totalSumForMaterials * (30 / 100) * 8;

  let finalSum = totalSumForMaterials + sumForMaistor;

  console.log(finalSum);
}

painting(["10", "11", "4", "8"]);
painting(["5", "10", "10", "1"]);

// function calPercnt(num, percentage) {
//   const result = num * (percentage / 100);
//   return parseFloat(result.toFixed(2));
// }
// const percntVal = calPercnt(500, 20);
// console.log(percntVal);
