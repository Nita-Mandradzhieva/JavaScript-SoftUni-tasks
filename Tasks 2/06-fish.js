function fish(priceSkumriqKg, priceCacaKg, kgPalamud, kgSafrid, kgMidi) {
  let pricePalamud = priceSkumriqKg + priceSkumriqKg * 0.6;
  let sumPalamud = kgPalamud * pricePalamud;

  let priceSafrid = priceCacaKg + priceCacaKg * 0.8;
  let sumSafrid = kgSafrid * priceSafrid;

  let sumMidi = kgMidi * 7.5;

  let totalSum = (sumPalamud + sumSafrid + sumMidi).toFixed(2);

  console.log(totalSum);
}

fish(6.9, 4.2, 1.5, 2.5, 1);
fish(5.55, 3.57, 4.3, 3.6, 7);
