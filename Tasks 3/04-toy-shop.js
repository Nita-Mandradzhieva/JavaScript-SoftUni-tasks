function toyShop(array) {
  let priceForEkskurziqta = Number(array[0]);
  let countOfpuzels = Number(array[1]);
  let countOfTalkingDolls = Number(array[2]);
  let countOfBears = Number(array[3]);
  let countOfMinions = Number(array[4]);
  let countOfKamions = Number(array[5]);

  let otstupka = 0;
  let moneyLeft = 0;

  let sum =
    countOfpuzels * 2.6 +
    countOfTalkingDolls * 3 +
    countOfBears * 4.1 +
    countOfMinions * 8.2 +
    countOfKamions * 2;
  let countOfToys =
    countOfpuzels +
    countOfTalkingDolls +
    countOfBears +
    countOfMinions +
    countOfKamions;

  if (countOfToys >= 50) {
    otstupka = (25 / 100) * sum;
  }

  let krainaCena = sum - otstupka;

  let naem = (10 / 100) * krainaCena;

  let pechalba = krainaCena - naem;

  if (pechalba > priceForEkskurziqta) {
    moneyLeft = pechalba - priceForEkskurziqta;
    console.log(`Yes! ${moneyLeft} lv left`);
  } else if (pechalba < priceForEkskurziqta) {
    moneyLeft = priceForEkskurziqta - pechalba;
    console.log(`Not enought money! ${moneyLeft.toFixed(2)} lv needed`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
