function foodDelivery(array) {
  let chickenMenus = Number(array[0]);
  let fishMenus = Number(array[1]);
  let veganMenus = Number(array[2]);

  let priceForChickenMenus = chickenMenus * 10.35;
  let priceForFishMenus = fishMenus * 12.4;
  let priceForVeganMenus = veganMenus * 8.15;

  let totalMenusPrice =
    priceForChickenMenus + priceForFishMenus + priceForVeganMenus;

  let priceForDessert = (20 / 100) * totalMenusPrice;
  let deliveryPrice = 2.5;

  let finalPrice = totalMenusPrice + priceForDessert + deliveryPrice;

  console.log(finalPrice);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);
