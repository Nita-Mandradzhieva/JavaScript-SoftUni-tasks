function shopping(array) {
  let budjetPeter = Number(array[0]);
  let videocards = Number(array[1]);
  let procesors = Number(array[2]);
  let countRAMmemory = Number(array[3]);

  let leftMoney = 0;

  let sumVideoCards = videocards * 250;
  console.log(sumVideoCards); //500

  let priceProcesors = sumVideoCards * (35 / 100);

  let sumProcesors = priceProcesors * procesors;
  console.log(sumProcesors); //175

  let priceRAM = sumVideoCards * (10 / 100);
  console.log(priceRAM); //50

  let sumRAM = priceRAM * countRAMmemory;
  console.log(sumRAM); //150

  let totalSum = sumVideoCards + sumProcesors + sumRAM;
  console.log(totalSum);

  if (videocards > procesors) {
    totalSum = totalSum - totalSum * (15 / 100);
    console.log(totalSum);
  }

  if (totalSum <= budjetPeter) {
    leftMoney = budjetPeter - totalSum;
    console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
  } else if (totalSum > budjetPeter) {
    leftMoney = totalSum - budjetPeter;
    console.log(
      `Not enough money! You need ${leftMoney.toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
// shopping(["920.45", "3", "1", "1"]);
