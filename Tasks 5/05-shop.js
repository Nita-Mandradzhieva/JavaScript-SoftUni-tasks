function shop(array) {
  let typOfStoka = array[0];
  let town = array[1];
  let quantityOfStokata = Number(array[2]);

  let price = 0;

  switch (town) {
    case "Sofia":
      if (typOfStoka === "coffee") {
        price = 0.5;
      } else if (typOfStoka === "water") {
        price = 0.8;
      } else if (typOfStoka === "beer") {
        price = 1.2;
      } else if (typOfStoka === "sweets") {
        price = 1.45;
      } else if (typOfStoka === "peanuts") {
        price = 1.6;
      }
      break;
    case "Plovdiv":
      if (typOfStoka === "coffee") {
        price = 0.4;
      } else if (typOfStoka === "water") {
        price = 0.7;
      } else if (typOfStoka === "beer") {
        price = 1.1;
      } else if (typOfStoka === "sweets") {
        price = 1.3;
      } else if (typOfStoka === "peanuts") {
        price = 1.5;
      }
      break;
    case "Varna":
      if (typOfStoka === "coffee") {
        price = 0.45;
      } else if (typOfStoka === "water") {
        price = 0.7;
      } else if (typOfStoka === "beer") {
        price = 1.1;
      } else if (typOfStoka === "sweets") {
        price = 1.35;
      } else if (typOfStoka === "peanuts") {
        price = 1.55;
      }
      break;
  }

  let finalPrice = price * quantityOfStokata;

  console.log(finalPrice);
}

shop(["coffee", "Varna", "2"]);
shop(["peanuts", "Plovdiv", "1"]);
shop(["beer", "Sofia", "6"]);
shop(["water", "Plovdiv", "3"]);
shop(["sweets", "Sofia", "2.23"]);
